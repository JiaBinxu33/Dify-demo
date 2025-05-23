import {
  Field,
  FieldRenderProps,
  FormRenderProps,
  FormMeta,
  ValidateTrigger,
} from '@flowgram.ai/free-layout-editor';

import { FlowNodeJSON, JsonSchema } from '../../typings';
import { useIsSidebar } from '../../hooks';
import { FormHeader, FormContent, FormOutputs, PropertiesEdit } from '../../form-components';
import { MAPPING_TEXT } from '../../constants/mapping';

export const renderForm = ({ form }: FormRenderProps<FlowNodeJSON>) => {
  const isSidebar = useIsSidebar();
  if (isSidebar) {
    return (
      <>
        <FormHeader />
        <FormContent>
          <Field
            name="outputs.properties"
            render={({
              field: { value, onChange },
              fieldState,
            }: FieldRenderProps<Record<string, JsonSchema>>) => (
              <>
                <PropertiesEdit value={value} onChange={onChange} />
              </>
            )}
          />
        </FormContent>
      </>
    );
  }
  return (
    <>
      <FormHeader />
      <FormContent>
        <FormOutputs />
      </FormContent>
    </>
  );
};

export const formMeta: FormMeta<FlowNodeJSON> = {
  render: renderForm,
  validateTrigger: ValidateTrigger.onChange,
  validate: {
    title: ({ value }: { value: string }) => (value ? undefined : MAPPING_TEXT.TITLE_IS_REQUIRED),
  },
};
