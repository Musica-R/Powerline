import React from 'react';
import {
  FaLayerGroup,
  FaIndustry,
  FaBuilding,
  FaMapMarkerAlt,
  FaBolt,
  FaCogs,
  FaRupeeSign,
  FaLightbulb,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaArrowRight,
  FaChevronRight,
} from 'react-icons/fa';
import {
  MdOutlineElectricalServices,
  MdSettingsInputComponent,
  MdCable,
  MdOutlineBatteryChargingFull,
  MdVerticalAlignBottom,
} from 'react-icons/md';
import { GiPowerGenerator } from 'react-icons/gi';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHospital } from "react-icons/pi";

const ICONS = {
  layers: FaLayerGroup,
  factory: HiOutlineBuildingOffice2,
  building: PiHospital,
  pin: FaMapMarkerAlt,
  bolt: FaBolt,
  transformer: MdOutlineElectricalServices,
  dg: GiPowerGenerator,
  gear: FaCogs,
  panel: MdSettingsInputComponent,
  rupee: FaRupeeSign,
  bulb: FaLightbulb,
  cable: MdCable,
  tool: FaTools,
  shield: FaShieldAlt,
  ground: MdVerticalAlignBottom,
  network: FaNetworkWired,
  ups: MdOutlineBatteryChargingFull,
  arrow: FaArrowRight,
  chevron: FaChevronRight,
};

export default function PjIcon({ name, size = 20, ...rest }) {
  const Icon = ICONS[name] || ICONS.bolt;
  return <Icon size={size} aria-hidden="true" {...rest} />;
}