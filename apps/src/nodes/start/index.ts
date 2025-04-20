import { FlowNodeRegistry } from '../../typings';
import iconStart from '../../assets/icon-start.jpg';
import { formMeta } from './form-meta';
import { MAPPING_TEXT, NODE_TYPE } from '../../constants/mapping';

export const StartNodeRegistry: FlowNodeRegistry = {
  type: NODE_TYPE.START,
  lable: MAPPING_TEXT.START_TITLE,
  meta: {
    isStart: true,
    deleteDisable: false,
    copyDisable: false,
    defaultPorts: [{ type: 'output' }],
    size: {
      width: 360,
      height: 211,
    },
  },
  info: {
    icon: iconStart,
    description:
      MAPPING_TEXT.START_DESC,
  },
  /**
   * Render node via formMeta
   */
  formMeta,
  /**
   * Start Node cannot be added
   */
  canAdd() {
    return false;
  },
};
