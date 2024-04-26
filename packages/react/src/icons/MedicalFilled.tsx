// This icon file is generated automatically.
import * as React from 'react';
import MedicalFilledSvg from '@sensoro-design/icons-svg/es/asn/MedicalFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MedicalFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MedicalFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MedicalFilled);

RefIcon.displayName = 'MedicalFilled';

export default RefIcon;
