// This icon file is generated automatically.
import * as React from 'react';
import FolderViewOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FolderViewOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FolderViewOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FolderViewOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FolderViewOutlined);

RefIcon.displayName = 'FolderViewOutlined';

export default RefIcon;
