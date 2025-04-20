import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconLLM from '../../assets/icon-llm.jpg';

import { MAPPING_TEXT, NODE_TYPE } from '../../constants/mapping';
import { initialData } from '../../initial-data';

const {nodes} = initialData;
/**
 * @returns 根据初始数据返回llm节点数量
 */
function getLlmNode() {
  let index = 0;
  //获取循环画布中的llm节点数量
  nodes.filter(node => {
    if(node.type === 'llm'){
      index++;
    }
    return node.type === 'loop';
  }).forEach(item => {
    index +=item.blocks?.length || 0;
  });;
  return index;
}
let index = getLlmNode();
export const LLMNodeRegistry: FlowNodeRegistry = {
  type: NODE_TYPE.LLM,
  lable: MAPPING_TEXT.LLM_TITLE,
  info: {
    icon: iconLLM,
    description:MAPPING_TEXT.LLM_DESC,
  },
  meta: {
    size: {
      width: 360,
      height: 305,
    },
  },
  onAdd() {
    return {
      id: `${NODE_TYPE.LLM}_${nanoid(5)}`,
      type: NODE_TYPE.LLM,
      data: {
        title: `${MAPPING_TEXT.LLM_TITLE}_${index++}`,
        inputsValues: {},
        inputs: {
          type: 'object',
          required: [MAPPING_TEXT.MODEL_TYPE, MAPPING_TEXT.TEMPERATURE, MAPPING_TEXT.PROMPT],
          properties: {
            [MAPPING_TEXT.MODEL_TYPE]: {
              type: 'string',
            },
            [MAPPING_TEXT.TEMPERATURE]: {
              type: 'number',
            },
            [MAPPING_TEXT.SYSTEM_PROMPT]: {
              type: 'string',
            },
            [MAPPING_TEXT.PROMPT]: {
              type: 'string',
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
};
