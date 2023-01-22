import {
  FC,
  HTMLAttributes,
  useState,
  MouseEvent,
  ChangeEvent,
  useCallback,
} from 'react';

import MenuItem from '@mui/material/MenuItem';

import { CustomSettings } from './styles';

import { CustomSwitch } from 'components/CustomSwitch';
import { Nullable } from 'types/Nullable';
import { ReturnComponentType } from 'types/ReturnComponentType';

interface SettingsPropsType extends HTMLAttributes<HTMLDivElement> {
  onSwitchChange: (newsMode: boolean) => void;
  isChecked: boolean;
}

export const Settings: FC<SettingsPropsType> = ({
  children,
  onSwitchChange,
  isChecked,
}): ReturnComponentType => {
  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onToggleNewsModeSwitchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onSwitchChange(event.currentTarget.checked);
    },
    [],
  );

  return (
    <>
      <div
        onClick={handleClick}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {children}
      </div>
      <CustomSettings
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          <CustomSwitch
            checked={isChecked}
            onChange={onToggleNewsModeSwitchChange}
            label="Show news"
          />
        </MenuItem>
      </CustomSettings>
    </>
  );
};
