// This icon file is generated automatically.
import * as React from 'react';
import FileAddOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileAddOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileAddOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileAddOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileAddOutlined);

RefIcon.displayName = 'FileAddOutlined';

export default RefIcon;
