// This icon file is generated automatically.
import * as React from 'react';
import TagOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TagOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TagOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TagOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TagOutlined);

RefIcon.displayName = 'TagOutlined';

export default RefIcon;
