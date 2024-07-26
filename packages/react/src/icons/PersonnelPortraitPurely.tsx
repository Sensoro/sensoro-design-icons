// This icon file is generated automatically.
import * as React from 'react';
import PersonnelPortraitPurelySvg from '@sensoro-design/icons-svg/es/asn/PersonnelPortraitPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PersonnelPortraitPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PersonnelPortraitPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PersonnelPortraitPurely);

RefIcon.displayName = 'PersonnelPortraitPurely';

export default RefIcon;
