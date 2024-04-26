// This icon file is generated automatically.
import * as React from 'react';
import AppstoreFilledSvg from '@sensoro-design/icons-svg/es/asn/AppstoreFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppstoreFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppstoreFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppstoreFilled);

RefIcon.displayName = 'AppstoreFilled';

export default RefIcon;
