import { FlowDocumentJSON } from './typings';
import { MAPPING_TEXT, NODE_TYPE } from './constants/mapping';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: `${NODE_TYPE.START}_0`,
      type: NODE_TYPE.START,
      meta: {
        position: {
          x: 180,
          y: 313.25,
        },
      },
      data: {
        title: MAPPING_TEXT.START_TITLE,
        outputs: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              default: 'Hello Dify.',
            },
          },
        },
      },
    },
    {
      id: `${NODE_TYPE.CONDITION}_0`,
      type: NODE_TYPE.CONDITION,
      meta: {
        position: {
          x: 640,
          y: 298.75,
        },
      },
      data: {
        title: MAPPING_TEXT.CONDITION_TITLE,
        inputsValues: {
          conditions: [
            {
              key: 'if_0',
              value: {
                type: 'expression',
                content: '',
              },
            },
            {
              key: 'if_f0rOAt',
              value: {
                type: 'expression',
                content: '',
              },
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
    },
    {
      id: `${NODE_TYPE.LLM}_0`,
      type: NODE_TYPE.LLM,
      meta: {
        position: {
          x: 1430,
          y: 0,
        },
      },
      data: {
        title: `${MAPPING_TEXT.LLM_TITLE}_0`,
        inputsValues: {
          [MAPPING_TEXT.MODEL_TYPE]: 'Dify-1.0',
          [MAPPING_TEXT.TEMPERATURE]: 1.0,
          [MAPPING_TEXT.SYSTEM_PROMPT]: MAPPING_TEXT.SYSTEM_PROMPT_CONTENT,
          [MAPPING_TEXT.PROMPT]: '',
        },
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
            result: {
              type: 'string',
            },
          },
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 2220,
          y: 313.25,
        },
      },
      data: {
        title: MAPPING_TEXT.END_TITLE,
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string',
            },
          },
        },
      },
    },
    {
      id: `${NODE_TYPE.LOOP}_H8M3U`,
      type: NODE_TYPE.LOOP,
      meta: {
        position: {
          x: 1020,
          y: 532.5,
        },
      },
      data: {
        title: `${MAPPING_TEXT.LOOP_TITLE}_1`,
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
            result: {
              type: 'string',
            },
          },
        },
      },
      blocks: [
        {
          id: `${NODE_TYPE.LLM}_CBdCg`,
          type: NODE_TYPE.LLM,
          meta: {
            position: {
              x: 180,
              y: 0,
            },
          },
          data: {
            title: `${MAPPING_TEXT.LLM_TITLE}_1`,
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
                result: {
                  type: 'string',
                },
              },
            },
          },
        },
        {
          id: `${NODE_TYPE.LLM}_gZafu`,
          type: NODE_TYPE.LLM,
          meta: {
            position: {
              x: 640,
              y: 0,
            },
          },
          data: {
            title: `${MAPPING_TEXT.LLM_TITLE}_2`,
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
                result: {
                  type: 'string',
                },
              },
            },
          },
        },
      ],
      edges: [
        {
          sourceNodeID: `${NODE_TYPE.LLM}_CBdCg`,
          targetNodeID: `${NODE_TYPE.LLM}_gZafu`,
        },
      ],
    },
  ],
  edges: [
    {
      sourceNodeID: `${NODE_TYPE.START}_0`,
      targetNodeID: `${NODE_TYPE.CONDITION}_0`,
    },
    {
      sourceNodeID: `${NODE_TYPE.CONDITION}_0`,
      targetNodeID: `${NODE_TYPE.LLM}_0`,
      sourcePortID: `if_0`,
    },
    {
      sourceNodeID: `${NODE_TYPE.CONDITION}_0`,
      targetNodeID: `${NODE_TYPE.LOOP}_H8M3U`,
      sourcePortID: `if_f0rOAt`,
    },
    {
      sourceNodeID: `${NODE_TYPE.LLM}_0`,
      targetNodeID: `${NODE_TYPE.END}_0`,
    },
    {
      sourceNodeID: `${NODE_TYPE.LOOP}_H8M3U`,
      targetNodeID: `${NODE_TYPE.END}_0`,
    },
  ],
};
