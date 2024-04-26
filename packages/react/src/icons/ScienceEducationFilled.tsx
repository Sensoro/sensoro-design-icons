// This icon file is generated automatically.
import * as React from 'react';
import ScienceEducationFilledSvg from '@sensoro-design/icons-svg/es/asn/ScienceEducationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScienceEducationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScienceEducationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScienceEducationFilled);

RefIcon.displayName = 'ScienceEducationFilled';

export default RefIcon;
