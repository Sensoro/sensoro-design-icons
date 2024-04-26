// This icon file is generated automatically.
import * as React from 'react';
import FolderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FolderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FolderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FolderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FolderOutlined);

RefIcon.displayName = 'FolderOutlined';

export default RefIcon;
