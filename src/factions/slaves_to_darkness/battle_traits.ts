import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
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
        name: `Eye of the Gods - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Warriors of Chaos or Darkoath Hero to be the target. 
        Effect: During the battle, the target gains Dark Apotheosis points as follows: 
        Each time the target uses a Fight ability, it gains D3 Dark Apotheosis points.
        At the end of each of your turns, if the target is contesting an objective that is wholly outside friendly territory, it gains D3 Dark Apotheosis points.`,
        when: [DURING_SETUP, END_OF_TURN],
      },
      {
        name: `Pledge to Chaos - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Unique Slaves to Darkness unit that does not already have one of the keywords below to be the target.
        Effect: Pick 1 of the following Pledge to Chaos keywords:
        Pledged to Khorne
        Pledged to Tzeentch
        Pledged to Nurgle
        Pledged to Slaanesh
        The target has that keyword for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dark Apotheosis - Once Per Battle`,
        desc: `Declare: Pick a friendly unit with 8 or more Dark Apotheosis points to be the target. 
        Effect: Pick one of the following:
        Aura of Chaos: Heal (X) the target, where X is the number of damage points allocated to the target. 
        In addition, the target has Ward (5+) for the rest of the battle.
        Daemonhood: Set up a Daemon Prince within 1" of the target. Then, Remove the target from the battlefield. If the target is your general, the Daemon Prince becomes your general instead and is added to your general's regiment. If the target has any enhancements, the Daemon Prince has those enhancements instead. If the target has a Pledge to Chaos keyword, the Daemon Prince has the same keyword. Otherwise, pick 1 Pledge to Chaos keyword for the Daemon Prince to have for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pledged to Tzeentch - Once Per Turn`,
        desc: `Declare: Pick a friendly Pledged to Tzeentch unit to be the target.
        Effect: Roll 2D6. Then pick a point within a number of inches of the target equal to the roll. Remove the target from the battlefield and set it up again on the battlefield wholly within 6" of that point and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Pledged to Khorne - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of melee weapons used by friendly Pledged to Khorne units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Pledged to Nurgle - Passive`,
        desc: `Effect: Friendly Pledged to Nurgle units have Ward (6+). If a unit already has Ward (6+), it has Ward (5+) instead.`,
        when: [DURING_GAME],
      },
      {
        name: `Pledged to Slaanesh`,
        desc: `Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for friendly Pledged to Slaanesh units, to a maximum of 3.`,
        when: [CHARGE_PHASE],
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
      {
        name: `The Dread Banner (Ensorcelled Banners) - Passive (CAN ONLY HAVE ONE)`,
        desc: `Effect: While this unit includes any standard bearers, enemy units cannot use commands while they are in combat with this unit.`,
        when: [DURING_GAME],
      },
      {
        name: `The Banner of Rage (Ensorcelled Banners) - Passive (CAN ONLY HAVE ONE)`,
        desc: `Effect: This unit has the Pledged to Khorne keyword.
        In addition, while this unit includes any standard bearers, add 1 to wound rolls for this unit's combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Blasted Standard (Ensorcelled Banners) - Passive (CAN ONLY HAVE ONE)`,
        desc: `Effect: This unit has the Pledged to Tzeentch keyword.
        In addition, while this unit includes any standard bearers, this unit has Ward (4+) against damage inflicted by shooting attacks.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `The Eroding Icon (Ensorcelled Banners) - Passive (CAN ONLY HAVE ONE)`,
        desc: `Effect: This unit has the Pledged to Nurgle keyword.
        In addition, while this unit includes any standard bearers, attacks that target this unit cannot score critical hits (treat them as regular hits instead).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Banner of Screaming Flesh (Ensorcelled Banners) - Passive (CAN ONLY HAVE ONE)`,
        desc: `Effect: This unit has the Pledged to Slaanesh keyword.
        In addition, while thi sunit includes any standard bearers, if this unit charged this turn, add 1 to the Attacks characteristic of this unit's melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
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
