import { useEffect } from "react";

export default function TagembedWidget() {
  useEffect(() => {
    // Проверяем, чтобы скрипт не добавлялся повторно
    if (document.getElementById("tagembed-script")) return;

    const script = document.createElement("script");
    script.id = "tagembed-script";
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="tagembed-widget"
      style={{
        width: "100%",
        height: "600px",
        overflow: "auto",
      }}
      data-widget-id="313289"
      data-website="1"
    />
  );
}
