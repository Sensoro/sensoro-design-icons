// This icon file is generated automatically.
import * as React from 'react';
import FolderOpenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FolderOpenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FolderOpenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FolderOpenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FolderOpenOutlined);

RefIcon.displayName = 'FolderOpenOutlined';

export default RefIcon;
