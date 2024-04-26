// This icon file is generated automatically.
import * as React from 'react';
import EditFilledSvg from '@sensoro-design/icons-svg/es/asn/EditFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EditFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EditFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EditFilled);

RefIcon.displayName = 'EditFilled';

export default RefIcon;
