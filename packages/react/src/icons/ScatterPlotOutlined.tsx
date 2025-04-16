// This icon file is generated automatically.
import * as React from 'react';
import ScatterPlotOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScatterPlotOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScatterPlotOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScatterPlotOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScatterPlotOutlined);

RefIcon.displayName = 'ScatterPlotOutlined';

export default RefIcon;
