import { Tooltip, IconButton } from '@douyinfe/semi-ui';

import { UIIconMinimap } from './styles';
import { MAPPING_TEXT } from '../../constants/mapping';

export const MinimapSwitch = (props: {
  minimapVisible: boolean;
  setMinimapVisible: (visible: boolean) => void;
}) => {
  const { minimapVisible, setMinimapVisible } = props;

  return (
    <Tooltip content={MAPPING_TEXT.MINIMAP}>
      <IconButton
        type="tertiary"
        theme="borderless"
        icon={<UIIconMinimap visible={minimapVisible} />}
        onClick={() => setMinimapVisible(!minimapVisible)}
      />
    </Tooltip>
  );
};
