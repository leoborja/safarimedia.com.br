import * as React from 'react';
import { SVGProps } from 'react';
const RoundedText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={122}
    height={122}
    fill="none"
    {...props}
  >
    <path
      fill="#A8E1FF"
      d="m58.07 105.439-2.732 5.311-1.777-.263-1.136-5.881 1.118.165.947 5.094-.365-.226.957.141-.423.11 2.324-4.612 1.088.161Zm-1.551 1.289-.48.869-2.268-.335-.202-.969 2.95.435Zm-8.535-3.369-.13 5.932-1.076-.37.176-5.114.257.252-.79-.271.364-.039-2.893 4.181-1.04-.357 3.418-4.803 1.714.589Zm-6.921-2.885-2.311 4.401-.18-.391 1.324.694-.44.837-1.987-1.044 2.627-5.005.967.508Zm-5.259-3.189-1.908 5.619-.916-.677 1.706-4.824.17.318-.673-.497.36.073-4.017 3.117-.884-.653 4.704-3.553 1.458 1.077Zm-8.167-7.287L23.1 93.372l-.896-1.205 1.863-3.152-.083-.112-3.55.884-.91-1.224 4.535-3.374.651.876-3.87 2.88-.071-.121 3.843-.958.67.9-2.018 3.412-.1-.108 3.87-2.88.602.808Zm-5.533-8.237-5.09 2.459-.468-.97 5.09-2.458.468.97Zm-.401-.83-.837.405-1.115-2.308.837-.404 1.115 2.308Zm-2.169 1.048-.836.404-1.027-2.126.836-.405 1.027 2.127Zm-2.084 1.007-.837.404-1.088-2.252.837-.404 1.088 2.252Zm1.593-8.602-.982.284-.325-1.124a2.16 2.16 0 0 0-.344-.714 1.67 1.67 0 0 0-.535-.458 1.653 1.653 0 0 0-.66-.189 2.068 2.068 0 0 0-.757.083 2.05 2.05 0 0 0-.693.337 1.565 1.565 0 0 0-.457.51c-.109.199-.17.421-.186.667-.016.241.017.503.098.786l.325 1.123-.982.284-.305-1.056c-.142-.491-.194-.941-.156-1.35.037-.408.147-.77.33-1.087a2.49 2.49 0 0 1 .699-.79c.281-.216.593-.373.935-.472l.164-.047a2.745 2.745 0 0 1 1.02-.094 2.666 2.666 0 0 1 1.902 1.03c.26.323.461.73.603 1.22l.306 1.057Zm.262.907-5.497 1.59-.306-1.057L19 74.234l.305 1.057Zm-1.903-7.826-5.602.755-.147-1.09 5.602-.754.147 1.09Zm-.506-4.558-5.647-1.945.006-1.796 5.658-1.966-.003 1.13-4.907 1.666.172-.394-.003.968-.17-.403 4.897 1.64-.003 1.1Zm-1.498-1.352-.928-.351.007-2.292.93-.338-.009 2.981ZM18.88 47.55l-5.446-1.517.295-1.06 5.446 1.517-.295 1.06Zm-.995 3.572-5.446-1.516.295-1.06 5.446 1.517-.295 1.06Zm-2.02-1.495-.932-.26.808-2.9.933.259-.808 2.901Zm5.936-8.903c-.223.46-.497.82-.824 1.08a2.84 2.84 0 0 1-1.04.53 3.24 3.24 0 0 1-1.089.083 2.983 2.983 0 0 1-.963-.268l-.153-.074a2.992 2.992 0 0 1-.846-.616 2.84 2.84 0 0 1-.6-.91 2.758 2.758 0 0 1-.192-1.133c.008-.409.122-.839.34-1.29.216-.445.481-.799.796-1.059a2.668 2.668 0 0 1 1.005-.546c.36-.107.724-.14 1.09-.101.36.037.696.13 1.007.281l.154.074a2.9 2.9 0 0 1 .804.596c.25.253.454.555.61.906.155.345.232.726.23 1.144.001.413-.109.847-.329 1.303Zm-.92-.446a1.85 1.85 0 0 0 .198-.764 1.695 1.695 0 0 0-.127-.715 1.89 1.89 0 0 0-.403-.608 2.15 2.15 0 0 0-.619-.446 2.241 2.241 0 0 0-.761-.222 1.714 1.714 0 0 0-1.345.416 1.97 1.97 0 0 0-.47.633 1.99 1.99 0 0 0-.208.768c-.013.252.023.49.11.715.088.22.22.422.395.605.178.178.395.328.65.452.237.115.48.186.73.216.248.022.49.001.727-.062.234-.07.449-.187.643-.351a1.9 1.9 0 0 0 .48-.637Zm3.238-3.882-4.705-3.134.61-.915 4.704 3.134-.61.915Zm.524-.786-.806-.537 1.352-2.03.806.537-1.352 2.03Zm2.831-3.705-.762-.681.78-.872c.196-.219.337-.442.423-.67.086-.235.12-.467.104-.697a1.655 1.655 0 0 0-.19-.658 2.068 2.068 0 0 0-.472-.6 2.052 2.052 0 0 0-.654-.407 1.564 1.564 0 0 0-.675-.116 1.555 1.555 0 0 0-.664.196 2.281 2.281 0 0 0-.614.5l-.78.872-.76-.682.732-.82c.34-.38.694-.663 1.06-.848a2.627 2.627 0 0 1 1.097-.297c.361-.016.708.041 1.04.173.333.124.632.305.898.542l.127.113c.253.228.46.5.62.816.164.313.262.653.293 1.02.032.368-.02.747-.156 1.138-.135.392-.373.778-.714 1.159l-.733.82Zm-.63.704-4.265-3.815.733-.82 4.265 3.816-.733.82Zm5.623-5.766-3.614-4.347.846-.703 3.613 4.347-.845.703Zm4.057-3.148-2.961-4.815 1.537-.945 4.507 2.792.218-.134-.06.2-2.555-4.156.884-.544 2.961 4.816-1.543.949-4.508-2.792-.224.138.06-.2 2.554 4.156-.87.535Zm9.07-4.532c-.45.182-.878.267-1.282.258a2.834 2.834 0 0 1-1.108-.264 2.955 2.955 0 0 1-.874-.658 3.26 3.26 0 0 1-.58-.943l-.064-.158a3.04 3.04 0 0 1-.218-1.04c-.013-.362.04-.714.158-1.056.123-.345.318-.657.584-.936a2.878 2.878 0 0 1 1.042-.687c.46-.185.901-.263 1.325-.233a2.295 2.295 0 0 1 1.947 1.27l-1.027.413a1.21 1.21 0 0 0-.483-.473c-.2-.11-.42-.165-.66-.169a1.809 1.809 0 0 0-.72.14 1.81 1.81 0 0 0-.616.398c-.162.165-.28.355-.356.569a1.821 1.821 0 0 0-.094.698c.017.249.079.507.187.776.118.292.263.536.437.733.174.198.368.348.582.45.212.099.441.149.687.15.243-.003.496-.058.76-.164.35-.14.627-.336.832-.586.204-.254.318-.523.344-.806l.153.899-.544-1.35.94-.38.47 1.164a2.48 2.48 0 0 1-.599 1.167c-.313.343-.72.616-1.223.818Zm-.987-1.973-.306-.761 2.858-1.151.307.76-2.859 1.152Zm10.324-1.721-.232-2.086 2.001-.222.232 2.085-2.001.223Zm9.443.817 2.71-5.323 1.778.255 1.161 5.877-1.12-.16-.968-5.09.367.224-.958-.138.422-.111-2.304 4.622-1.088-.156Zm1.546-1.296.477-.87 2.269.324.206.968-2.952-.422Zm8.549 3.333.104-5.933 1.078.365-.154 5.115-.258-.251.792.268-.365.04 2.875-4.193 1.042.353-3.398 4.817-1.716-.581Zm6.933 2.855 2.293-4.41.18.39-1.326-.69.436-.837 1.993 1.035-2.607 5.016-.969-.503Zm5.273 3.167 1.884-5.627.918.673-1.685 4.831-.171-.317.675.494-.36-.072 4.003-3.134.887.65-4.689 3.573-1.462-1.07Zm8.198 7.252 4.52-3.393.902 1.201-1.85 3.16.085.112 3.546-.9.915 1.22-4.52 3.394-.656-.874 3.858-2.895.072.12-3.84.974-.673-.898 2.003-3.42.1.108-3.858 2.896-.604-.805Zm5.568 8.213 5.079-2.48.472.967-5.079 2.48-.472-.967Zm.404.828.835-.407 1.125 2.303-.835.407-1.125-2.303Zm2.164-1.056.835-.408 1.036 2.122-.835.408-1.036-2.122Zm2.081-1.016.835-.408 1.097 2.248-.835.407-1.097-2.247Zm-1.557 8.609.981-.288.329 1.122c.083.282.199.52.347.713.155.197.334.349.537.456.204.107.424.168.66.185.243.02.495-.008.758-.085.272-.08.503-.194.691-.34.195-.144.346-.315.455-.513.108-.199.169-.421.183-.667a2.286 2.286 0 0 0-.102-.786l-.329-1.122.981-.288.31 1.055c.144.49.198.94.162 1.349a2.632 2.632 0 0 1-.326 1.088c-.177.316-.408.58-.695.794a2.81 2.81 0 0 1-.934.476l-.163.047a2.75 2.75 0 0 1-1.021.098 2.667 2.667 0 0 1-1.906-1.022c-.261-.32-.464-.727-.608-1.217l-.31-1.055Zm-.266-.906 5.49-1.613.31 1.055-5.49 1.613-.31-1.055Zm1.936 7.817 5.599-.779.151 1.09-5.599.778-.151-1.089Zm.525 4.556 5.655 1.921.003 1.797-5.65 1.99-.002-1.131 4.899-1.687-.169.395-.002-.968.171.403-4.903-1.62-.002-1.1Zm1.504 1.346.93.347.003 2.292-.929.342-.004-2.981Zm-3.422 14.02 5.452 1.494-.291 1.06-5.452-1.493.291-1.06Zm.98-3.577 5.451 1.493-.29 1.06-5.452-1.492.291-1.06Zm2.025 1.486.934.256-.796 2.905-.934-.255.796-2.906Zm-5.897 8.929c.22-.46.494-.822.819-1.084a2.843 2.843 0 0 1 1.037-.534c.37-.092.733-.121 1.089-.088.359.04.68.128.964.264l.154.074c.312.149.595.353.849.612.258.26.46.563.604.907.142.349.208.726.196 1.133-.006.409-.118.839-.334 1.29-.214.448-.478.802-.792 1.064a2.777 2.777 0 0 1-2.091.656 2.99 2.99 0 0 1-1.009-.278l-.154-.073a2.875 2.875 0 0 1-.807-.592 3.053 3.053 0 0 1-.615-.904 2.732 2.732 0 0 1-.234-1.142c-.003-.414.105-.848.324-1.305Zm.922.442a1.85 1.85 0 0 0-.195.765c-.007.254.036.492.13.715.097.229.232.43.405.606.177.181.384.329.621.443.256.122.51.195.762.219a1.718 1.718 0 0 0 1.344-.422c.189-.167.344-.379.467-.635.125-.26.193-.517.205-.769a1.731 1.731 0 0 0-.113-.715 1.872 1.872 0 0 0-.398-.603 2.376 2.376 0 0 0-.652-.449 2.274 2.274 0 0 0-.731-.212c-.248-.021-.49 0-.726.064a1.765 1.765 0 0 0-.642.354 1.913 1.913 0 0 0-.477.639Zm-3.222 3.896 4.718 3.114-.606.917-4.717-3.113.605-.918Zm-.52.788.808.534-1.344 2.035-.808-.533 1.344-2.035Zm-2.816 3.716.765.679-.776.874c-.195.22-.335.445-.42.673a1.67 1.67 0 0 0-.101.697c.017.23.082.449.193.658.112.216.27.415.474.596.213.189.431.324.655.406.225.088.45.126.676.113a1.55 1.55 0 0 0 .663-.2c.213-.114.416-.282.612-.502l.776-.875.764.678-.73.823c-.338.382-.69.667-1.056.853a2.63 2.63 0 0 1-1.096.302 2.492 2.492 0 0 1-1.04-.168 2.807 2.807 0 0 1-.9-.539l-.127-.113a2.745 2.745 0 0 1-.625-.813 2.665 2.665 0 0 1-.297-1.019 2.744 2.744 0 0 1 .151-1.139c.134-.391.37-.779.71-1.161l.73-.823Zm.627-.706 4.281 3.797-.73.822-4.28-3.797.73-.822Zm-5.598 5.79 3.632 4.331-.842.707-3.632-4.332.842-.706Zm-4.044 3.165 2.982 4.803-1.533.951-4.52-2.772-.216.135.058-.2 2.573 4.144-.882.547-2.981-4.802 1.54-.956 4.518 2.773.224-.139-.058.2-2.573-4.145.868-.539Zm-9.05 4.57a3.24 3.24 0 0 1 1.28-.263c.402.015.772.101 1.11.259.334.165.626.383.877.655.247.278.441.592.584.94l.064.158a3.028 3.028 0 0 1 .068 2.096 2.638 2.638 0 0 1-.579.939 2.877 2.877 0 0 1-1.04.691c-.458.187-.9.267-1.324.239a2.3 2.3 0 0 1-1.952-1.262l1.026-.418c.125.212.286.369.484.472.2.108.42.163.662.165.235.004.475-.043.719-.143.244-.099.448-.233.614-.4a1.53 1.53 0 0 0 .353-.571 1.83 1.83 0 0 0 .092-.698 2.54 2.54 0 0 0-.19-.775 2.51 2.51 0 0 0-.441-.732 1.862 1.862 0 0 0-.584-.448 1.634 1.634 0 0 0-.687-.146c-.243.004-.496.06-.76.167a2.042 2.042 0 0 0-.83.59 1.488 1.488 0 0 0-.34.807l-.156-.898.55 1.348-.94.383-.474-1.161c.087-.431.284-.821.594-1.17.311-.345.718-.619 1.22-.824Zm.995 1.97.31.76-2.855 1.163-.31-.76 2.855-1.163Zm-11.505 1.78.303 2.076-1.993.291-.302-2.077 1.992-.29Z"
    />
    <circle
      cx={61}
      cy={61}
      r={60.682}
      stroke="url(#a)"
      strokeWidth={0.635}
      strokeOpacity={0.1}
    />
    <circle cx={61} cy={61} r={15} fillOpacity={0.4} fill="url(#b)" />
    <defs>
      <linearGradient
        id="a"
        x1={100}
        x2={11.5}
        y1={-36.5}
        y2={148.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8E1FF" />
        <stop offset={1} stopColor="#C4D0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={46}
        x2={66}
        y1={12}
        y2={83}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8E1FF" />
        <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export { RoundedText };
