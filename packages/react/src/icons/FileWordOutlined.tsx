// This icon file is generated automatically.
import * as React from 'react';
import FileWordOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileWordOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileWordOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileWordOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileWordOutlined);

RefIcon.displayName = 'FileWordOutlined';

export default RefIcon;
