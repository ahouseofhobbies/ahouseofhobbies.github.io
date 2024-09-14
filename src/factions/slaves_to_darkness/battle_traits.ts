import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'
import { SLAVES_TO_DARKNESS } from 'meta/factions'

const BattleTraits = {
  // Slaves to Darkness Allegiance
  [SLAVES_TO_DARKNESS]: {
    effects: [
      {
        name: `Eye of the Gods - Once Per Turn`,
        desc: `Declare: Each friendly Slaves to Darkness unit that destroyed an enemy unit this turn is a target. Friendly Beasts and non-Hero Monsters cannot be targeted by this ability. 
        Effect: Make a reward roll of D6 for each target and apply the corresponding effect below. You can re-roll the reward roll for the target, but if you do so and you roll a 1, inflict D3 mortal damage on the target. 
        1 Snubbed by the Gods: No effect. 
        2 Mutative Regrowth: Heal (3) the target. 
        3 Unnatural Grace: Add 1 to hit rolls for the targets combat attacks for the rest of the battle. 
        4 Lurid Aura: The target has Ward (6+) for the rest of the battle. If the target already has Ward (6+), it has Ward (5+) instead. 
        5 Slaughterers Might: Add 1 to the Rend characteristic of the targets melee weapons for the rest of the battle. 
        6 Champion of Chaos: Pick any other effect. 
        The same effect can be applied multiple times to a unit, and more than 1 effect can apply to a unit at the same time.`,
        when: [END_OF_TURN],
      },
      {
        name: `Marks of Chaos - Passive`,
        desc: `Effect: Friendly Slaves to Darkness units have 1 of the following effects based on the Mark of Chaos keyword they have.  
        Undivided: Add 1 to wound rolls for the units combat attacks that target a Hero or Monster.  
        Khorne: Add 1 to the Attacks characteristic of the units melee weapons for the rest of the turn if the unit charged in the same turn.  
        Tzeentch: The unit has Ward (4+) against mortal damage inflicted by Spell abilities and abilities used by Manifestations.  
        Nurgle: Subtract 1 from wound rolls for combat attacks that target the unit.  
        Slaanesh: Add 1 to run rolls and charge rolls for the unit. 
        If a unit with a Mark of Chaos keyword is replaced, the replacement unit has the same Mark of Chaos keyword.`,
        when: [DURING_GAME],
      },
      {
        name: `Nexus Chaotica (Faction Terrain) - Draw Power`,
        desc: `Effect: Roll a dice. Give a number of power points to this terrain feature equal to the roll. This terrain feature can have a maximum of 12 power points at once.`,
        when: [HERO_PHASE],
      },
      {
        name: `Nexus Chaotica (Faction Terrain) - Infernal Sorcery`,
        desc: `Declare: If this terrain feature has 3 or more power points, pick a friendly Slaves to Darkness Wizard within 3" of this terrain feature to be the target. 
        Effect: Remove 3 power points from this terrain feature, then add 1 to casting rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Nexus Chaotica (Faction Terrain) - Corrupt the Realms`,
        desc: `Declare: If this terrain feature has 9 or more power points, pick an objective or terrain feature within 24" of this terrain feature to be the source. Then, pick any number of enemy units within 3" of the source to be the targets. 
        Effect: Remove 9 power points from this terrain feature, then roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },

  // ENSORCELLED BANNERS
 /* 'Ensorcelled Banners: Icons of Chaos': {
    effects: [
      {
        name: `The Blasphemous Icon`,
        desc: `While this model is on the battlefield, subtract 1 from chanting rolls for prayers chanted by PRIESTS that do not have the CHAOS keyword.`,
        when: [HERO_PHASE],
      },
    ],
  },

  //Heroic Actions
  'Vows of Darkness': {
    effects: [
      {
        name: `Heroic Action: Pledge to Dark Gods`,
        desc: `Pick 1 friendly SLAVES TO DARKNESS HERO with the EYE OF THE GODS keyword. Until the end of that turn, each time you roll on the Eye of the Gods table for that HERO, you can roll 3 dice instead of 2, and pick any 2 of the dice rolled as your score.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Heroic Action: Draw on Power`,
        desc: `Pick 1 friendly SLAVES TO DARKNESS WIZARD. Until the end of that turn, when making casting rolls with that WIZARD, roll 3 dice instead of 2. However, if the unmodified roll on 2 or more of the dice is 1, the spell miscasts, and the caster suffers D6 mortal wounds instead of D3.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },

  // SUB FACTIONS
  Ravagers: {
    effects: [
      {
        name: `Heroic Action: Rally the Tribes`,
        desc: `You can carry out the following heroic action with a RAVAGERS HERO instead of any other heroic action you can carry out with that HERO. Pick 1 CHAOS MARAUDERS, CHAOS MARAUDER HORSEMEN, CULTIST or DARKOATH unit in your army that has been destroyed. If you do so, a new replacement unit with half the number of models in the unit that was destroyed (rounding up) is added to your army. Set up that unit wholly within 12" of the HERO carrying out this heroic action and more than 9" from all enemy units. Each destroyed unit can only be replaced once - replacement units cannot themselves be replaced.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  Cabalists: {
    effects: [
      {
        name: `Blasphemous Rituals`,
        desc: `CABALIST HEROES become WIZARDS. If the HERO is already a WIZARD, they can attempt to cast 1 additional spell in each of your hero phases and know 1 additional spell from the Lore of the Damned spell lore.`,
        when: [DURING_GAME, HERO_PHASE],
        rule_sources: [
          rule_sources.ERRATA_JANUARY_2023,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
      {
        name: `Blasphemous Rituals`,
        desc: `If you carry out the Draw on Power heroic action (pg 72) with a Cabalist Hero, you can immediately carry out the same heroic action with each other Cabalist Hero that has the Eye of Gods keyword and that is within 3" of the first.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [
          rule_sources.ERRATA_JANUARY_2023,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
    ],
  },
  Despoilers: {
    effects: [
      {
        name: `The Favoured and the Cursed`,
        desc: `Each DESPOILER DAEMON PRINCE can be given a command trait in addition to your general, which can be used as if they were a general. Each command trait must be different.`,
        when: [DURING_GAME],
      },
      {
        name: `The Favoured and the Cursed`,
        desc: `Add 2 to the Wounds characteristic of friendly DESPOILERS MONSTER units.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Host of the Everchosen': {
    effects: [
      {
        name: `Legions of Darkness`,
        desc: `Chaos Chosen, Chaos Knights or Chaos Warriors unit that receives the Rally command, you can return 1 slain model to that unit for each 5+ instead of each 6.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.ERRATA_JANUARY_2023],
      },
      {
        name: `Legions of Darkness`,
        desc: `You can pick 1 additional Ensorcelled Banners enhancement for your army.`,
        when: [DURING_GAME],
        rule_sources: [rule_sources.ERRATA_JANUARY_2023],
      },
    ],
  },
  'The Knights of the Empty Throne': {
    effects: [
      {
        name: `Unmatched Conquerors`,
        desc: `KNIGHTS OF THE EMPTY THRONE units that have a Mount can run and still charge in the same turn.`,
        when: [CHARGE_PHASE, MOVEMENT_PHASE],
      },
      {
        name: `Dread Lieutenant`,
        desc: `When you pick the general for your army, if Archaon is not included in the army, you can pick a model in a friendly VARANGUARD unit to be your general. If you do so, that unit gains the Leader battlefield role.
        Designer's Note: This general cannot be given a command trait as it is not a HERO.`,
        when: [DURING_GAME],
      },
      {
        name: `Dread Lieutenant`,
        desc: `If a VARANGUARD general issues the Rally command and a friendly VARANGUARD unit receives it, you can return 1 slain model to that unit for each 5+ instead of each 6.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Legions of the First Prince': {
    effects: [
      {
        name: `The Favour of the Four`,
        desc: `You can pick 1 LEGION OF THE FIRST PRINCE UNDIVIDED unit and then pick 1 of the following Marks of Chaos keywords; KHORNE, TZEENTCH, NURGLE or SLAANESH. That unit has that Mark of Chaos until the start of your next hero phase in addition to the UNDIVIDED Mark of Chaos.
        
        Designer's Note: If you pick a WIZARD unit to have the TEENTCH Mark of Chaos, it knows the Warp Reality' spell until the start of your next hero phase.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Infernal Servants`,
        desc: `Allied Bloodletters, Horrors of Teentch, Plaguebearers and Daemonettes units benefit from the Marks of Chaos battle trait (pg 70) as if they had the SLAVES TO DARKNESS keyword.`,
        when: [DURING_GAME],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
