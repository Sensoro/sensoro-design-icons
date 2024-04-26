// This icon file is generated automatically.
import * as React from 'react';
import SafetyCertificateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SafetyCertificateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetyCertificateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetyCertificateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetyCertificateOutlined);

RefIcon.displayName = 'SafetyCertificateOutlined';

export default RefIcon;
