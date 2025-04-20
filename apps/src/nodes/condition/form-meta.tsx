import { FormRenderProps, FormMeta, ValidateTrigger } from '@flowgram.ai/free-layout-editor';

import { FlowNodeJSON } from '../../typings';
import { FormHeader, FormContent } from '../../form-components';
import { ConditionInputs } from './condition-inputs';

import { MAPPING_TEXT } from '../../constants/mapping';

export const renderForm = ({ form }: FormRenderProps<FlowNodeJSON>) => (
  <>
    <FormHeader />
    <FormContent>
      <ConditionInputs />
    </FormContent>
  </>
);

export const formMeta: FormMeta<FlowNodeJSON> = {
  render: renderForm,
  validateTrigger: ValidateTrigger.onChange,
  validate: {
    title: ({ value }: { value: string }) => (value ? undefined : MAPPING_TEXT.TITLE_IS_REQUIRED),
    'inputsValues.conditions.*': ({ value }) => {
      if (!value?.value?.content) return MAPPING_TEXT.CONDITION_IS_REQUIRED;
      return undefined;
    },
  },
};
