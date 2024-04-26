// This icon file is generated automatically.
import * as React from 'react';
import IrrigationPipelineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IrrigationPipelineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IrrigationPipelineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IrrigationPipelineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IrrigationPipelineOutlined);

RefIcon.displayName = 'IrrigationPipelineOutlined';

export default RefIcon;
