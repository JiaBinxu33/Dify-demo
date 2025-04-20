import { nanoid } from 'nanoid';
import {
  WorkflowNodeEntity,
  PositionSchema,
  FlowNodeTransformData,
} from '@flowgram.ai/free-layout-editor';

import { defaultFormMeta } from '../default-form-meta';
import { FlowNodeRegistry } from '../../typings';
import iconLoop from '../../assets/icon-loop.jpg';
import { LoopFormRender } from './loop-form-render';
import { MAPPING_TEXT } from '../../constants/mapping';
import {initialData} from '../../initial-data';

const {nodes} = initialData;
const initialIndex = nodes.filter(node => node.type === 'loop').length;
let index = initialIndex || 0;
export const LoopNodeRegistry: FlowNodeRegistry = {
  type: 'loop',
  lable: MAPPING_TEXT.LOOP_TITLE,
  info: {
    icon: iconLoop,
    description:MAPPING_TEXT.LOOP_DESC,
  },
  meta: {
    /**
     * Mark as subcanvas
     * 子画布标记
     */
    isContainer: true,
    /**
     * The subcanvas default size setting
     * 子画布默认大小设置
     */
    size: {
      width: 560,
      height: 400,
    },
    /**
     * The subcanvas padding setting
     * 子画布 padding 设置
     */
    padding: () => ({
      top: 150,
      bottom: 100,
      left: 100,
      right: 100,
    }),
    /**
     * Controls the node selection status within the subcanvas
     * 控制子画布内的节点选中状态
     */
    selectable(node: WorkflowNodeEntity, mousePos?: PositionSchema): boolean {
      if (!mousePos) {
        return true;
      }
      const transform = node.getData<FlowNodeTransformData>(FlowNodeTransformData);
      // 鼠标开始时所在位置不包括当前节点时才可选中
      return !transform.bounds.contains(mousePos.x, mousePos.y);
    },
    expandable: false, // disable expanded
  },
  onAdd() {
    console.log("initialIndex",initialIndex);

    return {
      id: `loop_${nanoid(5)}`,
      type: 'loop',
      data: {
        title: `${MAPPING_TEXT.LOOP_TITLE}_${++index}`,
        inputsValues: {
          [MAPPING_TEXT.LOOP_TIMES]: 2,
        },
        inputs: {
          type: 'object',
          required: [MAPPING_TEXT.LOOP_TIMES],
          properties: {
            [MAPPING_TEXT.LOOP_TIMES]: {
              type: 'number',
            },
          },
        },
        outputs: {
          type: 'object',
          properties: {
            result: { type: 'string' },
          },
        },
      },
    };
  },
  formMeta: {
    ...defaultFormMeta,
    render: LoopFormRender,
  },
  onCreate() {
    // NOTICE: 这个函数是为了避免触发固定布局 flowDocument.addBlocksAsChildren
  },
};
