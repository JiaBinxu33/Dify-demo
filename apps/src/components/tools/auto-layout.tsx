import { useCallback } from 'react';

import { usePlayground, usePlaygroundTools } from '@flowgram.ai/free-layout-editor';
import { IconButton, Tooltip } from '@douyinfe/semi-ui';

import { IconAutoLayout } from '../../assets/icon-auto-layout';
import { MAPPING_TEXT } from '../../constants/mapping';

export const AutoLayout = () => {
  const tools = usePlaygroundTools();
  const playground = usePlayground();
  const autoLayout = useCallback(async () => {
    await tools.autoLayout();
  }, [tools]);

  return (
    <Tooltip content={MAPPING_TEXT.AUTO_LAYOUT}>
      <IconButton
        disabled={playground.config.readonly}
        type="tertiary"
        theme="borderless"
        onClick={autoLayout}
        icon={IconAutoLayout}
      />
    </Tooltip>
  );
};
