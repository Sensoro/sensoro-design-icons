// This icon file is generated automatically.
import * as React from 'react';
import FolderAddOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FolderAddOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FolderAddOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FolderAddOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FolderAddOutlined);

RefIcon.displayName = 'FolderAddOutlined';

export default RefIcon;
