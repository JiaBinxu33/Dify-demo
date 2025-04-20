import { usePlaygroundTools } from '@flowgram.ai/free-layout-editor';
import { IconButton, Tooltip } from '@douyinfe/semi-ui';
import { IconExpand } from '@douyinfe/semi-icons';
import { MAPPING_TEXT } from '../../constants/mapping';

export const FitView = () => {
  const tools = usePlaygroundTools();
  return (
    <Tooltip content={MAPPING_TEXT.FIT_VIEW}>
      <IconButton
        icon={<IconExpand />}
        type="tertiary"
        theme="borderless"
        onClick={() => tools.fitView()}
      />
    </Tooltip>
  );
};
