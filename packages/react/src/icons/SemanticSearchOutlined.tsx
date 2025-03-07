// This icon file is generated automatically.
import * as React from 'react';
import SemanticSearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SemanticSearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SemanticSearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SemanticSearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SemanticSearchOutlined);

RefIcon.displayName = 'SemanticSearchOutlined';

export default RefIcon;
