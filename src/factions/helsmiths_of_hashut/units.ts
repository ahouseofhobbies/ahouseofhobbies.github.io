import { keyPicker, tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_TURN,
} from 'types/phases'
import Prayers from './prayers'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

// Shared Effects
const Units = {
  'Urak Taar': {
    effects: [
      {
        name: `The Curse of Stone: Casting value of 7`,
        desc: `Declare: Pick a point on the battlefield within 9" of this unit, then pick a second point on the battlefield within 9" of the first point. Draw a line between the first point and the second point. Each enemy unit the lines pass across is a target. Then, make a casting roll of 2D6.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Ghorrakos's Horns and Hooves is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Peerless Among Daemonsmiths - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
        DPP Effect:
        1: This unit has Ward (6+). 
        2: Add 1 to casting rolls for this unit. In addition, this unit has Ward (5+).
        3: Add 2 to casting rolls for this unit. In addition, this unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Pitiless Trampling - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target.
        Effect: Inflict D3 mortal damage on the target. Then, roll 2D6. This unit can move a distance up to the value of the roll. During that move, this unit can pass through models in the target unit but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Master of Daemonic Power - Enemy Hero Phase`,
        desc: `Effect: Remove up to 3 daemonic power points in total from any combination of friendly units wholly within 18" of this unit. Then, allocate them to a different friendly non-Hobgrot Helsmiths of Hashut unit wholly within 18" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Daemonsmith on Infernal Taurus': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Horns and Hooves is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Immolating Presence - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. If the roll exceeds the target's Health characteristic, 1 model in the target unit is slain.`,
        when: [END_OF_TURN],
      },
      {
        name: `Unholy Stampede - Passive`,
        desc: `Effect: While a friendly Helsmiths of Hashut Cavalry unit is wholly within 12" of this unit:
        That unit can use a Retreat ability and still use Charge abilities later in the turn.
        No mortal damage is inflicted on that unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Daemonic Resilience - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
        DPP Effect:
        1: This unit has Ward (6+). 
        2: This unit has Ward (5+).
        3: This unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  Daemonsmith: {
    effects: [
      {
        name: `Molten Mending - Once Per Turn`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut War Machine unit wholly within 6" of this unit to be the target. Add 6" to the range of this ability for each daemonic power point this unit has.
        Effect: Heal (D3+X) the target, where X is the number of daemonic power points this unit has.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'War Despot': {
    effects: [
      {
        name: `Black-Hearted Conqueror - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Helsmiths of Hashut Infantry units while they are wholly within 6" of this unit. Add 6" to the range of this ability for each daemonic power point this unit has.`,
        when: [END_OF_TURN],
      },
      {
        name: `Fight, You Scum! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Helsmiths of Hashut Infantry unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to the Attacks characteristic of its melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'War Despot (SoG)': {
    effects: [
      {
        name: `Daemonfire Pistol - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the enemy target. Then, you can pick a friendly Helsmiths of Hashut Infantry unit in combat with the enemy target to be the friendly target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the enemy target equal to the roll. 
        If there is a friendly target, for the rest of the turn: 
        It can use a Retreat ability and still use Shoot and/or Charge abilities later in the turn. 
        Add 2" to the distance it can move when using Retreat abilities. 
        No mortal damage is inflicted on it by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Triumph or Perish, You Vermin! - Passive`,
        desc: `Effect: While this unit has any daemonic power points, friendly nonHobgrot Helsmiths of Hashut units, excluding War Despots, with 0 daemonic power points count as having 1 daemonic power point while they are wholly within 9" of and visible to this unit. 
        Add 3" to the range of this ability while this unit has 2 daemonic power points. Add 6" to the range of this ability instead while this unit has 3 daemonic power points.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Ashen Elder': {
    effects: [
      {
        name: `Extract Power`,
        desc: `Effect: If this unit is contesting an objective, a Place of Power, or a terrain feature and that objective, Place of Power or terrain feature has a friendly desolation token, give this unit 1 ritual point.`,
        when: [END_OF_TURN],
      },
      {
        name: `Stoked Fanaticism - Passive`,
        desc: `Effect: Ignore the first damage point allocated to each friendly non-Hobgrot Helsmiths of Hashut unit each phase while it is wholly within 6" of this unit. Add 6" to the range of this ability for each daemonic power point this unit has.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Infernal Razers with Blunderbusses': {
    effects: [
      {
        name: `Hateful Hail - Once Per Turn`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same enemy unit, that enemy unit is the target.
        Effect: Roll a dice and add the number of enemy models in the target unit destroyed by attacks made by this unit this turn. If the result is 6+, the target has Strike-Last for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Manglers of Metal - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this unit's ranged weapons for each daemonic power point this unit has.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Infernal Razers with Flamehurlers': {
    effects: [
      {
        name: `Scorched Remains - Once Per Turn`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same Infantry unit, that enemy unit is the target.
        Effect: Roll a dice. On a 3+, subtract an amount equal to the roll from the target's control score until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Manglers of Metal - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this unit's ranged weapons for each daemonic power point this unit has.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Hobgrot Vandalz': {
    effects: [
      {
        name: `Disposable Lackeys`,
        desc: `Effect: This unit can immediately use the 'Normal Move' ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Infernal Cohort with Hashutite Spears': {
    effects: [
      {
        name: `Conquered Lands`,
        desc: `Declare: If this unit is contesting an objective you control, pick a friendly non-Hobgrot Helsmiths of Hashut unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 3+, give the target 1 daemonic power point.`,
        when: [HERO_PHASE],
      },
      {
        name: `Sacred Gongs - Passive`,
        desc: `Effect: This unit's Gong Carriers are tokens. There is 1 Gong Carrier for every Musician in this unit. If this unit uses the 'Rally' command, as a reaction, you can remove a Gong Carrier to make an additional rally roll of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Resilience - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
        DPP Effect:
        1: This unit has Ward (6+). 
        2: This unit has Ward (5+).
        3: This unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Infernal Cohort with Hashutite Blades': {
    effects: [
      {
        name: `Disciplined March - Passive`,
        desc: `Effect: When making run rolls for this unit, if you roll a 1-3, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sacred Gongs - Passive`,
        desc: `Effect: This unit's Gong Carriers are tokens. There is 1 Gong Carrier for every Musician in this unit. If this unit uses the 'Rally' command, as a reaction, you can remove a Gong Carrier to make an additional rally roll of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Resilience - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
        DPP Effect:
        1: This unit has Ward (6+). 
        2: This unit has Ward (5+).
        3: This unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Infernal Cohort with Hashutite Blades (SoG)': {
    effects: [
      {
        name: `Take Up Their Arms - Once Per Turn`,
        desc: `Declare: Pick another visible friendly non-Hobgrot Helsmiths of Hashut Infantry unit, Deathshrieker Rocket Battery or Tormentor Bombard within 12" of this unit to be the target. 
        Effect: Remove up to 3 models from this unit. Then, if the target is an Infantry unit, return a number of slain models to the target equal to the number of models you removed from this unit. If the target is a War Machine, heal a number of damage points allocated to the target equal to the number of models you removed from this unit. 
        Models removed from this unit by this ability cannot be returned to this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Sanctified Gongs - Passive`,
        desc: `Effect: This units Gong Carriers are tokens. There is 1 Gong Carrier for every musician in this unit. If this unit uses the Rally command, make 2 additional rally rolls of D6 for each Gong Carrier in this unit, but for each unmodified rally roll of 1, you must remove a Gong Carrier from this unit after the command has been resolved.`,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Resilience - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
        DPP Effect:
        1: This unit has Ward (6+). 
        2: This unit has Ward (5+).
        3: This unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Bull Centaurs': {
    effects: [
      {
        name: `Bull-Charge`,
        desc: `Declare: If this unit charged this turn, pick a visible enemy unit within 1" of it to be the target.
        Effect: Roll a dice for each model in this unit. Add the number of daemonic power points this unit has to each roll. For each 6+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Crush the Unworthy - Passive`,
        desc: `Effect: Add 1 to charge rolls for this unit for each daemonic power point it has.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Anointed Sentinels': {
    effects: [
      {
        name: `Zealous Counter-Attack - Reaction: You declared the 'Counter-charge' command for this unit`,
        desc: `Effect: This unit has Strike-First for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Crush the Unworthy - Passive`,
        desc: `Effect: Add 1 to charge rolls for this unit for each daemonic power point it has.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Deathshrieker Rocket Battery': {
    effects: [
      {
        name: `Bungering Flames - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this unit's Hashu-Zharr Rockets is 5 if the target is a Monster or a War Machine.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Watch Them Burn - Reaction: You declared a Shoot ability for this unit and all of its attacks targeted the same enemy unit`,
        desc: `Effect: Roll a number of dice equal to the number of daemonic power points this unit has for each other enemy unit within the combat range of the target of this unit's shooting attacks. For each 3+, inflict 1 mortal damage on the enemy unit being rolled for.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tormentor Bombard': {
    effects: [
      {
        name: `Ruinous Bombardment - Once Per Turn`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same enemy unit, that enemy unit is the target.
        Then, you can pick a number of enemy units within 6" of the target equal to the number of daemonic power points this unit has to be additional targets.
        Effect: Roll a dice for each target. On a 3+, that unit cannot use commands until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Calculated Trajectory - Passive`,
        desc: `Effect: Add 1 to hit rolls for this unit's shooting attacks that target an enemy unit with 5 or more models that is more than 12" from this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Dominator Engine with Bane Maces': {
    effects: [
      {
        name: `Engines of Domination - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy Heroes, it can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the phase and can only be picked to use a second Fight ability if it is still in combat with any enemy Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Daemonic Strength - Passive`,
        desc: `Effect: For each daemonic power point this unit has:
        Add 1" to its Move characteristic.
        Add 1 to the Attacks characteristic of its weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Dominator Engine with Immolation Cannons': {
    effects: [
      {
        name: `All Must Burn - Once Per Turn`,
        desc: `Declare: Pick 2 or more visible enemy units within 8" of this unit to be the targets.
        Effect: For the rest of the turn, add 2 to the Attacks characteristic of this units Immolation Cannons for each unit picked to be the target of this ability, but each time this unit uses a Shoot ability, it must target each of those units with at least 3 of its attacks.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Daemonic Strength - Passive`,
        desc: `Effect: For each daemonic power point this unit has:
        Add 1" to its Move characteristic.
        Add 1 to the Attacks characteristic of its weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Diseased Revellers': {
    effects: [
      {
        name: `The Piper's Infectious Melodies - Passive`,
        desc: `Effect: While a Beast of Nurgle in this Regiment of Renown is within 3" of this Regiment of Renown's Sloppity Bilepiper, it can use the 'Attention Seekers' ability even if the other Beast of Nurgle in this Regiment of Renown has already used it this turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beasts of Nurgle: Attention Seekers - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick the closest enemy unit to it to be the target. If 2 or more enemy units are tied to be the closest, you can pick which is the target. Then, make a charge roll of 2D6.
        Effect: This unit can move a distance equal to the value of the charge roll. It can move through the combat ranges of enemy units and must end that move within 1/2" of the target. Then, inflict D3 mortal damage on the target. This unit has charged.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Beasts of Nurgle: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Sloppity Bilepiper: Jolly Gutpipes - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this unit or a visible enemy unit within 12" of this unit to be the target.
        Effect: If you picked a friendly unit to be the target, roll a dice. If the roll equals or exceeds the target's Control characteristic, add 2 to run rolls and charge rolls for the target until the start of your next turn.
        If you picked an enemy unit to be the target, roll a dice. If the roll equals or exceeds the target's Control characteristic, until the start of your next turn, while this unit is on the battlefield, inflict D3 mortal damage on the target:
        Each time the target ends a move further from this unit than it was at the start of the move, after the ability used by the target has been resolved.
        Each time the target is removed from the battlefield and set up again on the battlefield further from this unit than it was before it was removed, after the ability used by the target has been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: The Pustules': {
    effects: [
      {
        name: `Blighted Growth`,
        desc: `Effect: Set up this Regiment of Renown's Feculent Gnarlmaw wholly within friendly territory and more than 3" from all objectives and other terrain features. After you have done so, it has been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Multitudinous Diseases - Once Per Turn`,
        desc: `Declare: If this Regiment of Renown's Plaguebearers unit is wholly within 12" of this Regiment of Renown's Feculent Gnarlmaw, pick that Plaguebearers unit to be the target.
        Effect: Heal (1) the target. If the target is contesting an objective, you can also return 1 slain model to the target unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Spoilpox Scrivener: Keep Counting, I'm Watching You - Once Per Turn`,
        desc: `Declare: Pick a friendly Plaguebearers unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 2+, pick 1 of the following effects to apply until the start of your next turn: 
        Tally of Blows: Add 1 to wound rolls for the target's combat attacks.
        Recorded Stamina: Add 5 to the target's control score.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spoilpox Scrivener: Stupefying Sneezes - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that had any damage points allocated to it this phase by this unit's shooting attacks to be the target.
        Effect: The target cannot use Rampage abilities until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Plaguebearers: Cloud of Flies - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit while it is contesting an objective you control.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) -  Riddled with Disease - Passive`,
        desc: `Effect: Each time a friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this terrain feature uses the 'Rally' command, you can make 1 additional rally roll of D6. If that unit is a non-Hero unit, you can make 3 additional rally rolls of D6 instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) - Tendrils of Corruption`,
        desc: `Effect: For the rest of the phase, this terrain feature has a Move characteristic of 3" and can immediately move 3". It cannot move through or end that move within the combat ranges of enemy units and it cannot end that move on an objective or another terrain feature.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Seekers of Silver': {
    effects: [
      {
        name: `Splinters of Sorcery: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Wizard in this Regiment of Renown to cast this spell, pick a visible terrain feature within 12" of them that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6.
        Effect: If the target does not have the 'Place of Power' terrain ability, it gains that ability for the rest of the battle. If the target has the 'Place of Power' terrain ability, pick an enemy unit within 12" of it and roll 9 dice. For each 5+, inflict 1 mortal damage on that enemy unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bubbles of Unreality - Once Per Turn`,
        desc: `Declare: Pick a terrain feature with the 'Place of Power' terrain ability to be the target.
        Effect: The next time a friendly Wizard in this Regiment of Renown uses a Summon Spell ability this phase, you can measure the range and visibility of that Spell ability from the target instead of from the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gaunt Summoner on Disc: All Belongs to Tzeentch - Once Per Battle`,
        desc: `Declare: Pick an objective you do not control and that you controlled earlier in the battle to be the target. 
        Effect: You control the target objective.`,
        when: [START_OF_TURN],
      },
      {
        name: `Gaunt Summoner on Disc: Arcane Imprisonment: Casting value of 7`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target, then make a casting roll of 2D6.
        Effect: If the unmodified casting roll exceeds the target's Health characteristic, it is automatically destroyed and cannot be replaced for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Screamers: Drawn to Magic - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick an enemy Manifestation to be the target. Then, make a charge roll of 3D6.
        Effect: This unit can move a distance up to the value of the charge roll. It can move through the combat ranges of enemy units and must end that move within 1/2" of the target. If it does so, this unit has charged. Then, if this unit charged this turn, inflict D3 mortal damage on each enemy Manifestation in combat with this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Screamers: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Magister on Disc: Spellmaster - Once Per Turn - Reaction: You declared a Spell ability for a Wizard within 30" of this unit`,
        desc: `Effect: Make an unbinding roll of 2D6. If the roll exceeds the casting roll for the spell, the spell is unbound and its effect is not resolved.
        If the spell is unbound, add 1 to casting rolls for this unit for the rest of the phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Mask of the Deceiver': {
    effects: [
      {
        name: `Masked in Plain Sight`,
        desc: `Declare: This unit must be deployed using this ability.
        Effect: Set up this unit in reserve incognito. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bait and Switch`,
        desc: `Declare: This unit can use this ability if it is incognito. Pick this unit and a friendly Infantry Hero to be the targets. One target must be incognito and the other must be on the battlefield.
        Effect: Set up the incognito target wholly within 6" of the other target and not in combat. Then, remove the other target from the battlefield and set it up in reserve incognito.
        If this unit is destroyed, before removing it from play, set up the friendly incognito unit wholly within 6" of a battlefield edge and not in combat.`,
        when: [HERO_PHASE],
      },
      {
        name: `Forceful Command: Casting value of 6`,
        desc: `Declare: Pick a visible friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn:
        The target cannot use Move abilities.
        The target's melee weapons have Anti-charge (+1 Rend).`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
