import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import styles from './HourlyForecstSection.module.css';

const data = [
    { time: '11 pm', temp: 13 },
    { time: '12 am', temp: 12 },
    { time: '1 am', temp: 11 },
    { time: '2 am', temp: 10 },
    { time: '3 am', temp: 10 },
    { time: '4 am', temp: 10 },
    { time: '5 am', temp: 10 },
    { time: '6 am', temp: 11 },
    { time: '7 am', temp: 12 },
    { time: '8 am', temp: 13 },
    { time: '9 am', temp: 14 },
    { time: '10 am', temp: 16 },
    { time: '11 am', temp: 17 },
    { time: '12 pm', temp: 18 },
    { time: '1 pm', temp: 19 },
    { time: '2 pm', temp: 21 },
    { time: '3 pm', temp: 24 },
    { time: '4 pm', temp: 25 },
    { time: '5 pm', temp: 26 },
    { time: '6 pm', temp: 26 },
];

export const HourlyForeCastSection = () => {
    return (
        <div className={styles.hourlyForeCastSection}>
            <div className={styles.hourlyForeCastSectionWrapper}>
                <h1 className={styles.hourlyForeCastSectionTitle}>
                    Hourly forecast
                </h1>
                <div className={styles.hourlyForeCastSectionChart}>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                        >
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <XAxis
                                dataKey="time"
                                interval={0}
                                angle={-45}
                                textAnchor="end"
                                height={60}
                            />
                            <YAxis
                                domain={[5, 30]}
                                ticks={[5, 10, 15, 20, 25]}
                                tickFormatter={(value) => `${value}°C`}
                            />
                            <Tooltip formatter={(value) => `${value}°C`} />
                            <Line
                                type="monotone"
                                dataKey="temp"
                                stroke="#ffa64d"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};
