// This icon file is generated automatically.
import * as React from 'react';
import FilePdfOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FilePdfOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilePdfOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilePdfOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilePdfOutlined);

RefIcon.displayName = 'FilePdfOutlined';

export default RefIcon;
