// This icon file is generated automatically.
import * as React from 'react';
import TagFilledSvg from '@sensoro-design/icons-svg/es/asn/TagFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TagFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TagFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TagFilled);

RefIcon.displayName = 'TagFilled';

export default RefIcon;
