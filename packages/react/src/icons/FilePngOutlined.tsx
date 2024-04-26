// This icon file is generated automatically.
import * as React from 'react';
import FilePngOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FilePngOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilePngOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilePngOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilePngOutlined);

RefIcon.displayName = 'FilePngOutlined';

export default RefIcon;
