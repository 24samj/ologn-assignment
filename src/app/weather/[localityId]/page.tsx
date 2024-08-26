import axios from "axios";
import Link from "next/link";

export default async function LocalityPage({
  params,
}: {
  params: { localityId: string };
}) {
  const { localityId } = params;

  try {
    console.log("Fetching data for locality:", localityId);
    const response = await axios.get(
      `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
      {
        headers: {
          "X-Zomato-Api-Key": process.env.X_ZOMATO_API_KEY,
        },
      },
    );

    console.log("Response data:", response.data);

    const { locality_weather_data: weatherData } = response.data;

    // Data to display
    const weatherItems = [
      { label: "Temperature", value: `${weatherData.temperature || 0}°C` },
      { label: "Humidity", value: `${weatherData.humidity || 0}%` },
      { label: "Wind Speed", value: `${weatherData.wind_speed || 0} km/h` },
      { label: "Wind Direction", value: `${weatherData.wind_direction || 0}°` },
      { label: "Rain Intensity", value: weatherData.rain_intensity || "0" },
      {
        label: "Rain Accumulation",
        value: `${weatherData.rain_accumulation || 0} mm`,
      },
    ];

    return (
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Locality: {localityId}
        </h1>
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Weather Data
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {weatherItems.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <span className="text-gray-600">{label}:</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href={"/"}
              className="mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-700"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching weather data:", error);

    return (
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Error fetching data for locality: {localityId}
        </h1>
      </div>
    );
  }
}
