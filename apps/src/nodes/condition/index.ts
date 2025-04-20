import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconCondition from '../../assets/icon-condition.svg';
import { formMeta } from './form-meta';
import { MAPPING_TEXT, NODE_TYPE } from '../../constants/mapping';

export const ConditionNodeRegistry: FlowNodeRegistry = {
  type: NODE_TYPE.CONDITION,
  lable: MAPPING_TEXT.CONDITION_TITLE,
  info: {
    icon: iconCondition,
    description:
      MAPPING_TEXT.CONDITION_DESC,
  },
  meta: {
    defaultPorts: [{ type: 'input' }],
    // Condition Outputs use dynamic port
    useDynamicPort: true,
    expandable: false, // disable expanded
  },
  formMeta,
  onAdd() {
    return {
      id: `${NODE_TYPE.CONDITION}_${nanoid(5)}`,
      type: NODE_TYPE.CONDITION,
      data: {
        title: MAPPING_TEXT.CONDITION_TITLE,
        inputsValues: {
          conditions: [
            {
              key: `if_${nanoid(5)}`,
              value: '',
            },
            {
              key: `if_${nanoid(5)}`,
              value: '',
            },
          ],
        },
        inputs: {
          type: 'object',
          properties: {
            conditions: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  key: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    };
  },
};
