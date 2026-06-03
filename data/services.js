import {
    FaFan,
    FaSnowflake,
    FaLightbulb,
    FaPlug,
    FaBolt,
    FaWater,
    FaShower,
    FaTools,
    FaFire ,
    FaFireAlt 
} from "react-icons/fa";

import { FaTv } from "react-icons/fa6";

import {
    MdElectricalServices,
    MdOutlineWaterDrop,
    MdOutlineLight,
    MdLightMode, 
    MdWaterDrop ,
} from "react-icons/md";

import { BsPlugin } from "react-icons/bs";
import { GiWireCoil, GiElectricalResistance , GiWaterDrop  } from "react-icons/gi";

export const CATEGORIES = [
    {
        id: 'fan',
        icon: <FaFan />,
        name: 'Fan Services',
        services: [
            {
                id: 1,
                icon: <FaFan />,
                name: 'Ceiling Fan Installation',
                desc: 'Install new ceiling fans with full wiring, mounting, and safety checks.',
                price: 499,
                duration: '45-60 min'
            },
            {
                id: 3,
                icon: <FaFan />,
                name: 'Exhaust Fan Installation',
                desc: 'Install bathroom/kitchen exhaust fans with proper ventilation wiring',
                price: 399,
                duration: '30-60 min'
            },
        ]
    },
    {
        id: 'ac',
        icon: <FaSnowflake />,
        name: 'AC & Cooling',
        services: [
            {
                id: 4,
                icon: <FaSnowflake />,
                name: 'AC Washing & Cleaning',
                desc: 'Dedicated power line and wiring installation for air conditioners and heavy appliances.',
                price: 899,
                duration: '1-2 hrs'
            },
            { id: 5, icon: <FaSnowflake />, name: 'AC Installation', desc: 'Electrical support for AC mounting, earthing, and dedicated circuit setup.', price: 699, duration: '1-2 hrs' },
        ]
    },
    {
        id: 'lighting',
        icon: <FaLightbulb />,
        name: 'Lighting',
        services: [
            { id: 6, icon: <FaLightbulb />, name: 'Bulb holder installation', desc: 'Install ceiling lights, chandeliers, LEDs, or any light fixture safely and professionally.', price: 799, duration: '1-2 hrs' },
            { id: 7, icon: <MdLightMode  />, name: 'LED Tube light installation', desc: 'Weatherproof outdoor light installation, pathway lights, and garden setups.', price: 999, duration: '1-2 hrs' },
            { id: 99, icon: <MdOutlineLight />, name: 'Decorative lights installation (per 5m)', desc: 'Weatherproof outdoor light installation, pathway lights, and garden setups.', price: 999, duration: '1-2 hrs' },
        ]
    },
    {
        id: 'wiring',
        icon: <MdElectricalServices/>,
        name: 'Wiring & Electrical',
        services: [
            { id: 8, icon: <BsPlugin/>, name: 'Switch Board installation', desc: 'Fix or replace faulty power outlets, USB ports, and electrical sockets in your home.', price: 499, duration: '30-60 min' },
            { id: 9, icon: <GiWireCoil />, name: 'New Home Wiring installation (per 5m)', desc: 'Upgrade your main electrical panel for higher capacity, safety, and modern appliances.', price: 2999, duration: '3-5 hrs' },
            { id: 10, icon: <GiElectricalResistance />, name: 'Earthing installation', desc: 'Full or partial home rewiring for new construction or older homes needing upgrades.', price: 1899, duration: '3-4 hrs' },
        ]
    },
    {
        id: 'power',
        icon: <MdWaterDrop  />,
        name: 'RO - Water Purifier',
        services: [
            { id: 12, icon: <MdOutlineWaterDrop /> , name: 'RO Water Purifier Installation', desc: 'Professional installation of home inverters, UPS systems, and battery backups.', price: 1199, duration: '2-3 hrs' },
            { id: 13, icon: <MdOutlineWaterDrop /> , name: 'Compelte RO service', desc: 'Complete solar panel electrical wiring, connection, and system integration services.', price: 3499, duration: '4-6 hrs' },
        ]
    },
    {
        id: 'security',
        icon: <FaTv />,
        name: 'TV SERVICES',
        services: [
            { id: 14, icon: <FaTv />, name: 'TV installation', desc: 'Power connections, cable management, and electrical work for CCTV/security camera systems.', price: 1099, duration: '2-3 hrs' },
        ]
    },
    {
        id: 'geyser',
        icon: <FaFire  />,
        name: 'Geyser',
        services: [
            { id: 15, icon: <FaFireAlt   />, name: 'Geyser installation', desc: 'Power connections, cable management, and electrical work for CCTV/security camera systems.', price: 1099, duration: '2-3 hrs' },
        ]
    },
];