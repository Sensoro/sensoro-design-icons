// This icon file is generated automatically.
import * as React from 'react';
import FileUserOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileUserOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileUserOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileUserOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileUserOutlined);

RefIcon.displayName = 'FileUserOutlined';

export default RefIcon;
