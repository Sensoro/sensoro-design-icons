// This icon file is generated automatically.
import * as React from 'react';
import SafetyCertificateFilledSvg from '@sensoro-design/icons-svg/es/asn/SafetyCertificateFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetyCertificateFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetyCertificateFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetyCertificateFilled);

RefIcon.displayName = 'SafetyCertificateFilled';

export default RefIcon;
