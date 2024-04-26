// This icon file is generated automatically.
import * as React from 'react';
import RetrievePeopleFilledSvg from '@sensoro-design/icons-svg/es/asn/RetrievePeopleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RetrievePeopleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RetrievePeopleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RetrievePeopleFilled);

RefIcon.displayName = 'RetrievePeopleFilled';

export default RefIcon;
