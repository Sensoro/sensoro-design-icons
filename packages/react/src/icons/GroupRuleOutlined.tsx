// This icon file is generated automatically.
import * as React from 'react';
import GroupRuleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GroupRuleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GroupRuleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GroupRuleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GroupRuleOutlined);

RefIcon.displayName = 'GroupRuleOutlined';

export default RefIcon;
