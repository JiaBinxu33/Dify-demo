import { FlowNodeRegistry } from '../../typings';
import iconEnd from '../../assets/icon-end.jpg';
import { formMeta } from './form-meta';
import { MAPPING_TEXT, NODE_TYPE } from '../../constants/mapping';

export const EndNodeRegistry: FlowNodeRegistry = {
  type: NODE_TYPE.END,
  lable: MAPPING_TEXT.END_TITLE,
  meta: {
    deleteDisable: false,
    copyDisable: false,
    defaultPorts: [{ type: 'input' }],
    size: {
      width: 360,
      height: 211,
    },
  },
  info: {
    icon: iconEnd,
    description:
      MAPPING_TEXT.END_DESC,
  },
  /**
   * Render node via formMeta
   */
  formMeta,
  /**
   * End Node cannot be added
   */
  canAdd() {
    return false;
  },
};
