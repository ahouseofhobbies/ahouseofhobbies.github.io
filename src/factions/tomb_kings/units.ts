import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

const getIconBearerEffect = (strength: `1` | `D3` | `D6`) => {
  const plural = strength === `1` ? `` : `s`
  return {
    name: `Icon Bearer`,
    desc: `You can return ${strength} slain model${plural} to this unit in your hero phase if it includes any Icon Bearers.`,
    when: [HERO_PHASE],
    shared: true,
  }
}
const HornblowerEffect = {
  name: `Hornblower`,
  desc: `A unit that includes any Hornblowers can always move up to 6" when it charges, unless its charge roll is higher.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const WarsphinxBaseEffects = [
  {
    name: `Thundercrush Attack`,
    desc: `After this model completes a charge move, pick one enemy unit that is within 1" of it and roll a D6. If the dice roll is less than or equal to the number of models in the chosen unit, that unit suffers D3 mortal wounds.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
  {
    name: `Sacred War Statue`,
    desc: `Halve the Damage characteristic (rounding up) of weapons that target this model. In addition, halve the number of mortal wounds this model suffers from spells and abilities (rounding up).`,
    when: [WOUND_ALLOCATION_PHASE],
    shared: true,
  },
]
const TombShieldEffect = {
  name: `Tomb Shield`,
  desc: `This unit can create a shield fortress instead of running or charging in its turn. If it does so, add 1 to save rolls for the unit until its next movement phase.`,
  when: [SAVES_PHASE],
  shared: true,
}

const Units = {
  'Tomb King On Exalted Chariot': {
    mandatory: {
      command_abilities: [
        keyPicker(command_abilities, ['Ancient Curse', "And He Did Say 'War', and the World Did Tremble"]),
      ],
    },
    effects: [
      {
        name: `Crown of the Desert Kingdoms`,
        desc: `If this model is your general, Embalmed Heroes from your army that are within 18" of it in your hero phase can use command abilities even though they are not your general. Note that a unit can only be affected by each of the following command abilities once per battle round: 'And He Did Say 'War', and the World Did Tremble...', 'Blessing of Accuracy', 'My Will Be Done' and 'Who Dares Disturb My Slumber?'`,
        when: [HERO_PHASE],
      },
      {
        name: `Exalted Chariot`,
        desc: `In the combat phase, if this model made a charge move in the same turn, add 2 to the Attacks characteristic of its Blessed Blade. In addition, double the Attacks characteristic of, and add 1 to wound rolls for, the Skeletal Steeds' Thundering Hooves.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Incantation of the Desert Wind`,
        desc: `In your hero phase this model can invoke the Incantation of the Desert Wind. If he does so, pick a Desert Legions unit within 18" and roll a D6; on a roll of 1 this model suffers a mortal wound. On a roll of 2+ the incantation is successfully carried out - the chosen unit's Move characteristic is doubled and it can fly for the duration of your next movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scarab Amulet`,
        desc: `Roll a D6 each time this model suffers a wound or a mortal wound. On a roll of 5+ the wound is negated.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Tomb Queen': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Supernatural Speed', 'Blessing of Accuracy'])],
    },
    effects: [
      {
        name: `The Tomb Queen's Curse`,
        desc: `If this model is slain, the unit that inflicted the final wound upon it suffers D3 mortal wounds after all of its attacks have been made.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Tomb King': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Royal Chariot', 'My Will Be Done'])],
    },
    effects: [
      {
        name: `The Tomb King's Curse`,
        desc: `If a Tomb King is slain, the unit that inflicted the final wound upon him suffers D3 mortal wounds after all of its attacks have been made.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Tomb King In Royal Chariot': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Royal Chariot'])],
    },
    effects: [
      {
        name: `The Tomb King's Curse`,
        desc: `If a Tomb King in Royal Chariot is slain, the unit that inflicted the final wound upon him suffers D3 mortal wounds after all of its attacks have been made.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Scarab Prince': {
    effects: [
      {
        name: `Soul Reaper`,
        desc: `Add 1 to hit and wound rolls for this model's Cursed Dagger if the target is a HERO.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scarab Prince`,
        desc: `This model heals one wound in each of your hero phases.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scarab Prince`,
        desc: `If this model is slain, before it is removed it can immediately make a Tide of Scuttling Scarabs attack as if it were the shooting phase.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Desert Revenant`,
        desc: `Instead of setting up this model on the battlefield, you can place it to one side and say that it is set up entombed beneath the sands. In any of your movement phases, you can set it up on the battlefield more than 9" from any enemy models. This counts as this models move for that movement phase.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Tomb Herald': {
    effects: [
      {
        name: `Skeletal Steed`,
        desc: `A Herald can ride a skeletal steed. If he does so, his Move is increased to 12" and his steed can attack with its Thundering Hooves.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sworn Bodyguard`,
        desc: `If a friendly Embalmed model from your army is allocated a wound or mortal wound while within 3" of this model, the Tomb Herald can leap in front of the attack. Roll a D6 for each wound or mortal wound. On a 2+ that wound or mortal wound is allocated to the Tomb Herald instead.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Standard of the Undying Legion`,
        desc: `In your hero phase, a Tomb Herald can plant his standard and cause fallen warriors to return to the fight once more. If he does so, you may not move the Tomb Herald until your next hero phase, but you can immediately return 1 slain model to each friendly Desert Legions unit within 24".`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Liche Priest': {
    mandatory: {
      spells: [keyPicker(spells, ['Righteous Smiting'])],
    },
    effects: [
      {
        name: `Skeletal Steed`,
        desc: `A Liche Priest can ride a skeletal steed. If he does so, his Move is increased to 12" and he gains the Thundering Hooves attack.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Hierophant's Scrolls`,
        desc: `Once per game, when a Liche Priest attempts to unbind a spell, he can read from his ancient scrolls; if he does, that unbinding attempt is automatically successful.`,
        when: [HERO_PHASE],
      },
      {
        name: `Magic`,
        desc: `A Liche Priest is a wizard. He can attempt to cast one spell in each of your hero phases, and attempt to unbind one spell in each enemy hero phase. He knows the Arcane Bolt, Mystic Shield and Righteous Smiting spells.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Casket Of Souls': {
    effects: [
      {
        name: `Covenant of Power`,
        desc: `While a Liche Priest from your army is within 18" of this model, add 1 to their casting rolls.`,
        when: [HERO_PHASE],
      },
      {
        name: `Casket`,
        desc: `This model cannot make charge moves.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Casket`,
        desc: `You can add 1 to all save rolls for this model in the shooting phase.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Keeper's Scrolls`,
        desc: `The Keeper can attempt to unbind one spell in the enemy hero phase as if he were a WIZARD.`,
        when: [HERO_PHASE],
      },
      {
        name: `Unleashed Souls`,
        desc: `In your hero phase you can declare that the Keeper of the Casket will unleash the tortured souls of the damned. If you do so, pick a visible enemy unit within 20" and roll a D6. On a 3+ that unit suffers D3 mortal wounds (if its Bravery is 4 or less it suffers D6 mortal wounds instead). Then roll a D6 for each other enemy unit within 6" of the first unit. On a 5+ that unit is also attacked by the vengeful souls, and suffers D3 mortal wounds (if its Bravery is 4 or less it suffers D6 mortal wounds instead).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Skeletal Legionnaires': {
    effects: [
      {
        name: `Skeleton Champion`,
        desc: `The leader of this unit is a Skeleton Champion. Add 1 to the Attacks characteristic of the Skeleton Champion's Ancient Blade or Ancient Spear.`,
        when: [COMBAT_PHASE],
      },
      getIconBearerEffect(`D6`),
      HornblowerEffect,
      {
        name: `Serve in Death`,
        desc: `Add 1 to this unit's hit rolls while it is within 18" of any friendly Embalmed Hero.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Skeleton Legion`,
        desc: `Add 1 to the Attacks characteristic of this unit's melee weapons if it has 20 or more models. If it has 30 or more models, add 2 instead.`,
        when: [COMBAT_PHASE],
      },
      TombShieldEffect,
    ],
  },
  'Skeleton Archers': {
    effects: [
      {
        name: `Master Of Arrows`,
        desc: `The leader of this unit is a Master of Arrows. Add 1 to hit rolls for a Master of Arrows' attacks in the shooting phase.`,
        when: [SHOOTING_PHASE],
      },
      getIconBearerEffect(`D6`),
      HornblowerEffect,
      {
        name: `Hail of Ancient Arrows`,
        desc: `Add 1 to the Attacks characteristic of this unit's Ancient Bows while it has 20 or more models and there are no enemy models within 3" of it.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Skeleton Horsemen': {
    effects: [
      {
        name: `Master Of Horse`,
        desc: `The leader of this unit is a Master of Horse. Add 1 to the Attacks characteristic of the Master of Horse's Bronze-tipped Cavalry Spear.`,
        when: [COMBAT_PHASE],
      },
      getIconBearerEffect(`D3`),
      HornblowerEffect,
      {
        name: `Deathly Charge`,
        desc: `Add 1 to wound rolls for attacks made with this unit's Bronzetipped Cavalry Spears if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Horsemen's Shield`,
        desc: `Add 1 to the save rolls for this unit in the combat phase.`,
        when: [SAVES_PHASE],
      },
      {
        name: `First to Face the Foe`,
        desc: `This unit can charge even if it ran in the same turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Skeleton Horse Archers': {
    effects: [
      {
        name: `Master Of Scouts`,
        desc: `The leader of this unit is a Master of Scouts. Add 1 to hit rolls for a Master of Scouts' attacks in the shooting phase.`,
        when: [SHOOTING_PHASE],
      },
      getIconBearerEffect(`D3`),
      HornblowerEffect,
      {
        name: `Like the Angry Desert Wind`,
        desc: `This unit can shoot instead of moving in the movement phase. If it does so, it can move in the shooting phase of the same turn, but cannot shoot. If it moves in the shooting phase, it can retreat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Skeleton Chariots': {
    effects: [
      {
        name: `Master Of Chariots`,
        desc: `The leader of this unit is a Master of Chariots; Add 1 to the Attacks characteristic of the Master of Chariot's Charioteer's Spear.`,
        when: [COMBAT_PHASE],
      },
      getIconBearerEffect(`1`),
      HornblowerEffect,
      {
        name: `Crush them Beneath Our Wheels`,
        desc: `If this unit makes a charge move, then in the subsequent combat phase you may double the number of attacks it makes with its melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Tomb Guard': {
    effects: [
      {
        name: `Tomb Captain`,
        desc: `The leader of this unit is a Tomb Captain. Add 1 to the Attacks characteristic of the Tomb Captain's Tomb Blade or Bronze Halberd.`,
        when: [COMBAT_PHASE],
      },
      getIconBearerEffect(`D3`),
      HornblowerEffect,
      {
        name: `Cursed Weapons`,
        desc: `If the wound roll for an attack made by a model from this unit is 6+, add 1 to the Damage characteristic of their Tomb Blade or Bronze Halberd for that attack.`,
        when: [COMBAT_PHASE],
      },
      TombShieldEffect,
    ],
  },
  Necrotect: {
    effects: [
      {
        name: `Stern Taskmaster`,
        desc: `In your hero phase, you can pick a friendly Desert Legions unit within 8" of this model. That unit can move an extra 3" in your next movement phase. In addition, reroll wound rolls of 1 for that unit in your next combat phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Necropolis Knights': {
    effects: [
      {
        name: `Necropolis Captain`,
        desc: `The leader of this unit is a Necropolis Captain. Add 1 to the Attacks characteristic of the Necropolis Captain's Knight's Heavy Spear.`,
        when: [COMBAT_PHASE],
      },
      getIconBearerEffect(`1`),
      HornblowerEffect,
      {
        name: `Necrovenom`,
        desc: `Each time you make a wound roll of 6+ for a Necroserpent's Poisoned Fangs, that attack inflicts 1 mortal wound in addition to its normal damage.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Necropolis Shield`,
        desc: `Add 1 to the save rolls for a unit of Necropolis Knights with Necropolis shields in the combat phase.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Tomb Scorpions': {
    effects: [
      {
        name: `Entombed Beneath the Sands`,
        desc: `Instead of setting up a unit of Tomb Scorpions on the battlefield, you can place them to one side and say that they are set up beneath the ground. In any of your movement phases, you can set the unit up on the battlefield more than 9" from any enemy models. This is the unit's move for that movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Liche Priest's Sarcophagi`,
        desc: `Roll a D6 each time a model in this unit suffers a wound or a mortal wound caused by a spell. Add 1 to the roll if the model is within 18" of a friendly Necrotect. On a 5+ that wound or mortal wound is negated and has no effect.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  Ushabti: {
    effects: [
      {
        name: `War-Statuary`,
        desc: `Add 2 to save rolls for this unit against attacks that have a Damage characteristic of 1.`,
        when: [SAVES_PHASE],
      },
      {
        name: `The Likeness of Ancient Gods`,
        desc: `Reroll save rolls of 1 for this unit while it is within 18" of a friendly Necrotect.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  Warsphinx: {
    effects: [...WarsphinxBaseEffects],
  },
  'Royal Warsphinx': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Who Dares Disturb My Slumber?'])],
    },
    effects: [
      ...WarsphinxBaseEffects,
      {
        name: `The Tomb King's Curse`,
        desc: `If a Royal Warsphinx is slain, the unit that inflicted the final wound upon it suffers D3 mortal wounds after all of its attacks have been made.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  Necrosphinx: {
    effects: [
      {
        name: `Need to Destroy`,
        desc: `If a Necrosphinx is within 12" of the enemy in the charge phase, it must attempt to charge even if it ran in the preceding movement phase. In addition, when you make a charge roll for this model, roll 3 dice rather than 2 and use the two highest rolls.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Sacred War Statue`,
        desc: `Halve the Damage characteristic (rounding up) of weapons that target this model. In addition, halve the number of mortal wounds this model suffers from spells and abilities (rounding up).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Decapitating Strike`,
        desc: `If a Necrosphinx directs all of its attacks with its Gigantic Scything Blades at the same Monster, and two or more of the wound rolls have a result of 6+, the MONSTER suffers 10 mortal wounds in addition to the normal damage.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Sepulchral Stalkers': {
    effects: [
      {
        name: `Transmogrifying Gaze`,
        desc: `When this unit makes a Transmogrifying Gaze attack, choose an enemy unit within 10". Roll a D6 for each model in the attacking unit; for each roll of 1, a Sepulchral Stalker has caught a glimpse of its own reflection and the attacking unit suffers 1 mortal wound. On a 2 or 3 the target unit keeps its eyes shut and nothing happens. On a 4 or 5 the target unit suffers 1 mortal wound as it briefly meets the Stalker's gaze, but on a 6 it suffers D3 mortal wounds as it foolishly stares into the Stalker's eyes and crumbles to sand.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Underground Stalkers`,
        desc: `Instead of setting up a unit of Sepulchral Stalkers on the battlefield, you can place them to one side and say that they are set up beneath the ground. In any of your movement phases, you can set the unit up on the battlefield more than 9" from any enemy models. This is the unit's move for that movement phase. The Sepulchral Stalkers can burrow back underground in any of your future movement phases. If they do, remove the unit from the battlefield - it can return in a later turn as described above.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Bone Giant': {
    effects: [
      {
        name: `Unstoppable Assault`,
        desc: `For each hit roll of 6+ for a Bone Giant's attacks, it can immediately make one extra attack using the same weapon.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Colossus of War`,
        desc: `After this unit has attacked for the first time in the combat phase, roll a D6. Add 1 to the result if a friendly Necrotect is within 18". On a 5+ this unit can immediately pile in and attack for a second time this turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Screaming Skull Catapult': {
    effects: [
      ...GenericEffects.CrewedWarMachine('Crewed War Machine'),
      {
        name: `Arcing Skulls`,
        desc: `This war machine can shoot at targets that are not visible to it.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Screaming Ammunition`,
        desc: `A unit that suffers any wounds from Screaming Skulls must subtract 2 from its Bravery characteristic until the end of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Deathless Overseer`,
        desc: `You can fire Screaming Skulls an additional time in your shooting phase if there are any friendly Necrotects within 1" of the war machine.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  Carrion: {
    effects: [
      {
        name: `Circling High Above`,
        desc: `When first set up, units of Carrion are assumed to be flying high above the battlefield. As long as they remain high in the sky, they cannot be charged, attacked, targeted by spells or affected by abilities used by either side, and they also cannot make any attacks themselves as they soar far above their foes. Other units ignore the Carrion as they move (they move underneath them).`,
        when: [DURING_SETUP],
      },
      {
        name: `Scavenger's Dive`,
        desc: `The first time this unit declares a charge, you can roll 3 dice rather than 2 to see how far it charges (when doing so, you can declare a charge if it is within 18" of the enemy, rather than 12"). As they charge, the Carrion are assumed to drop down to low level, and the Circling High Above ability no longer applies to the unit for the rest of the battle.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Tomb Swarm': {
    effects: [
      {
        name: `Underground Scuttlers`,
        desc: `Instead of setting up a Tomb Swarm on the battlefield, you can place them to one side and say that they are set up beneath the ground. In any of your movement phases, you can set the unit up on the battlefield more than 9" from any enemy models. This is the unit's move for that movement phase. The unit can burrow back underground in any of your future movement phases. If it does, remove the unit from the battlefield - it can return in a later turn as described above.`,
        when: [DURING_SETUP],
      },
      {
        name: `Hidden Abodes`,
        desc: `If a Tomb Swarm burrows back underground as described above, it is joined by more of its scuttling brethren who had remained hidden. You may restore D3 slain models to the unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
