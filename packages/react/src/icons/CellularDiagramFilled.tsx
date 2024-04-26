// This icon file is generated automatically.
import * as React from 'react';
import CellularDiagramFilledSvg from '@sensoro-design/icons-svg/es/asn/CellularDiagramFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CellularDiagramFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CellularDiagramFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CellularDiagramFilled);

RefIcon.displayName = 'CellularDiagramFilled';

export default RefIcon;
