import legendary from './img/legendary_v_hot_chili_chicken_burger.jpg'
import jacky from './img/eternal_memory_of_jacky_burger.jpg'
import panam from './img/panams_hotty_botty_burger.jpg'
import takemura from './img/takemura_sashimi_burger.jpg'
import silverhand from './img/silverhand_triple_cheese_burger.jpg'
import rogue from './img/rogue_wild_turkey_burger.jpg'
import hanako from './img/hanakos_dashi_float_burger.jpg'
import wakako from './img/wakako_chirashi_salad_burger.jpg'
import ozob from './img/ozobs_nose_burger.jpg'
import dexter from './img/dexters_beef_and_pork_burger.jpg'
import smasher from './img/meat_meets_meat_smasher_deluxe_burger.jpg'

export default function menu() {

  const menuContent = `
    <div class="menu">
      <h3>Our most popular burgers</h3>
      <hr />
      <div class="menu-container">
        <div>
          <table>
          <tr>
          <th>highly recommended burgers</th>
          <th>ridiculous pricing</th>
          </tr>
          <tr>
          <td class='burger' data-scroll='0'>Legendary V's Hot Chili Chicken</td>
          <td class='burger' data-scroll='0'>€$ 13.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='1'>Eternal Memory Of Jacky</td>
          <td class='burger' data-scroll='1'>€$ 16.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='2'>Panam's Hotty Botty</td>
          <td class='burger' data-scroll='2'>€$ 12.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='3'>Takemura's Sashimi</td>
          <td class='burger' data-scroll='3'>€$ 21.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='4'>Silverhand's Triple Cheese</td>
          <td class='burger' data-scroll='4'>€$ 17.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='5'>Rogue's Wild Turkey</td>
          <td class='burger' data-scroll='5'>€$ 11.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='6'>Hanako's Dashi Float</td>
          <td class='burger' data-scroll='6'>€$ 15.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='7'>Wakako's Chirashi Salad</td>
          <td class='burger' data-scroll='7'>€$ 17.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='8'>Ozob's Nose</td>
          <td class='burger' data-scroll='8'>€$ 10.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='9'>Dexter's Beef & Pork</td>
          <td class='burger' data-scroll='9'>€$ 14.95</td>
          </tr>
          <tr>
          <td class='burger' data-scroll='10'>Meat-Meets-Meat Smasher Deluxe</td>
          <td class='burger' data-scroll='10'>€$ 18.95</td>
          </tr>
          </table>
          <p>Each burger will be served with "Zane Jagger Style" curly fries and a
            tin of "NiCola" or "Spunky Monkey" soft drink by choice!</p>
        </div>
        <div class="photo-container">
          <img src='${legendary}' width='256'/>
          <img src='${jacky}' width='256'/>
          <img src='${panam}' width='256'/>
          <img src='${takemura}' width='256'/>
          <img src='${silverhand}' width='256'/>
          <img src='${rogue}' width='256'/>
          <img src='${hanako}' width='256'/>
          <img src='${wakako}' width='256'/>
          <img src='${ozob}' width='256'/>
          <img src='${dexter}' width='256'/>
          <img src='${smasher}' width='256'/>
        </div>
      </div>
    </div>
  `
  return menuContent
}