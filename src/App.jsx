import { useState } from "react";
import "./styles.css";
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  });

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: parseFloat(value) }));
    document.documentElement.style.setProperty(`--${name}`, value);
  };

  const { brightness, contrast, saturation } = filter;

  const imageStyle = {
    filter: `brightness(${brightness}) contrast(${contrast}) saturation(${saturation})`,
  };

  /* Challenge

    Range input'ları henüz hiçbir şey yapmıyor. Sizin göreviniz bunları aşağıdaki gibi çalıştırmaktır: 
    
        1. Kullanıcı range input kaydırıcılarından birini her hareket ettirdiğinde, filter state nesnesindeki karşılık gelen değer, değişmeyen diğer iki değer korunarak input değeri olacak şekilde güncellenmelidir. 
           
        2. Filter state nesnesinin her güncellemesinde, --brightness, --contrast ve 
           --saturation Görüntünün filter özelliklerini kontrol eden CSS değişkenleri, karşılık gelen filter state nesne özelliklerinin değerleri olacak şekilde güncellenmelidir. İlgili CSS, styles.css dosyasının 1-13 satırlarında bulunabilir. 
		                       
        3. Range input'larının başlangıç değerleri, filter state nesnesindeki karşılık gelen özelliklerinin başlangıç değerleri olmalıdır.   
		   
		4. Kodunuzu mümkün olduğunca DRY yapmaya çalışın
*/

  return (
    <div className="main-container">
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className="image-container">
        <img
          src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg"
          style={imageStyle}
        />
      </div>

      <form>
        <label>
          <input
            type="range"
            name="brightness"
            min={0}
            max={2}
            step={0.1}
            value={brightness}
            onChange={handleRangeChange}
          />
          <span>Brightness</span>
        </label>

        <label>
          <input
            type="range"
            name="contrast"
            min={0}
            max={2}
            step={0.1}
            value={contrast}
            onChange={handleRangeChange}
          />
          <span>Contrast</span>
        </label>

        <label>
          <input
            type="range"
            name="saturation"
            min={0}
            max={2}
            step={0.1}
            value={saturation}
            onChange={handleRangeChange}
          />
          <span>Saturation</span>
        </label>
      </form>
    </div>
  );
}
