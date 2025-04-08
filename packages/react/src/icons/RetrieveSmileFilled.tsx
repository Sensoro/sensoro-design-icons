// This icon file is generated automatically.
import * as React from 'react';
import RetrieveSmileFilledSvg from '@sensoro-design/icons-svg/es/asn/RetrieveSmileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RetrieveSmileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RetrieveSmileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RetrieveSmileFilled);

RefIcon.displayName = 'RetrieveSmileFilled';

export default RefIcon;
