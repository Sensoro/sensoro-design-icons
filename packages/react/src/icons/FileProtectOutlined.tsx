// This icon file is generated automatically.
import * as React from 'react';
import FileProtectOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileProtectOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileProtectOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileProtectOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileProtectOutlined);

RefIcon.displayName = 'FileProtectOutlined';

export default RefIcon;
