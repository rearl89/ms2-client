import React from "react";
import { Layout } from "./layout";

export default function Loadout() {
  return (
    <Layout>
      <table className="table-auto w-full mx-auto">
        <thead>
          <tr className="border-b-2 border-black">
            <th>Primary Weapon</th>
            <th>Secondary Weapon</th>
            <th>Tactical Equipment</th>
            <th>Lethal Equipment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select className="border-4 rounded-xl">
                <option value="m4">M4</option>

                <option value="taq56">TAQ-56</option>

                <option value="kastov762">Kastov 762</option>

                <option value="lachmann556">Lachmann-556</option>

                <option value="stb556">STB 556</option>

                <option value="m16">M16</option>

                <option value="kastov74u">Kastov 74-u</option>

                <option value="kastov545">Kastov 545</option>

                <option value="m13b">M13B</option>

                <option value="chimera">Chimera</option>

                <option value="isohemlock">ISO Hemlock</option>
              </select>
            </td>
            <td>
              <select className="border-4 rounded-xl">
                <option value="x12">X12</option>

                <option value="x13auto">X13 Auto</option>

                <option value="50gs">.50 GS</option>

                <option value="p890">P890</option>

                <option value="basilisk">Basilisk</option>
              </select>
            </td>
            <td>
              <select className="border-4 rounded-xl">
                <option value="flashgrenade">Flash Grenade</option>

                <option value="shockstick">Shock Stick</option>

                <option value="decoygrenade">Decoy Grenade</option>

                <option value="stungrenade">Stun Grenade</option>

                <option value="smokegrenade">Smoke Grenade</option>

                <option value="teargas">Tear Gas</option>

                <option value="medicalsyringe">Medical Syringe</option>

                <option value="snapshotgrenade">Snapshot Grenade</option>

                <option value="spotterscope">Spotter Scope</option>

                <option value="heartbeatsensor">Heartbeat Sensor</option>
              </select>
            </td>
            <td>
              <select className="border-4 rounded-xl">
                <option value="frag">Frag Grenade</option>

                <option value="proximitymine">Proximity Mine</option>

                <option value="thermite">Thermite</option>

                <option value="semtex">Semtex</option>

                <option value="drillcharge">Drill Charge</option>

                <option value="c4">C4</option>

                <option value="throwingknife">Throwing Knife</option>

                <option value="molotovcocktail">Molotov Cocktail</option>

                <option value="claymore">Claymore</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
