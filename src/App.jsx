import React, { useState } from 'react';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState('Original Hummus');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Theme configurations - keeping flavor profile colors unchanged for accessibility
  const theme = {
    light: {
      background: '#f9fafb',
      cardBackground: '#ffffff',
      textPrimary: '#1f2937',
      textSecondary: '#6b7280',
      textMuted: '#9ca3af',
      border: '#e5e7eb',
      chartBackground: '#ffffff',
      chartRings: '#d1d5db',
      chartOuter: '#f3f4f6',
      buttonHover: '#f3f4f6',
      selectedButton: '#dbeafe',
      selectedButtonText: '#1e40af',
      selectedButtonBorder: '#3b82f6',
      accent: '#767670' // Qadisha Stone
    },
    dark: {
      background: '#0f0f0e',      // Very dark warm gray (from darkest tint)
      cardBackground: '#1e1e1c',  // Dark warm gray for better contrast
      textPrimary: '#f5f5f4',     // Warm off-white for readability
      textSecondary: '#d6d3d1',   // Light warm gray
      textMuted: '#a8a29e',       // Medium warm gray
      border: '#44403c',          // Dark warm border
      chartBackground: '#1e1e1c', // Same as card background
      chartRings: '#57534e',      // Medium warm gray for rings
      chartOuter: '#44403c',      // Dark warm border color
      buttonHover: '#2c2826',     // Slightly lighter warm gray
      selectedButton: '#dbeafe',  // Same blue as light mode
      selectedButtonText: '#1e40af', // Same blue text as light mode
      selectedButtonBorder: '#3b82f6', // Same blue border as light mode
      accent: '#767670' // Qadisha Stone
    }
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;
  
  // Trazza Foods brand colors
  const flavorColors = {
    depth: { color: '#6A432C' },         // Cedar Bark
    tanginess: { color: '#A93542' },     // Sumac Berry
    herbaceousness: { color: '#5A8638' }, // Olive Leaf
    richness: { color: '#2A6EBD' },      // Mount Lebanon Silk
    pungency: { color: '#4E3572' },      // Phoenician Purple
    spice: { color: '#D1832F' }          // Seven Spice
  };

  // Product ingredients
  const productIngredients = {
    'Original Hummus': 'Garbanzo Beans, Tahini (Ground Sesame), Garlic, Non-GMO Citric Acid, Sea Salt',
    'Organic Original Hummus': 'Organic Garbanzo Beans, Organic Tahini (Ground Sesame Seeds), Organic Garlic, Non GMO Citric Acid, Sea Salt',
    'Cilantro Jalapeno Hummus': 'Garbanzo Beans, Tahini (Ground Sesame), Garlic, Jalapeño Pepper, Cilantro, Non-GMO Citric Acid, Sea Salt',
    'Roasted Garlic & Chive Hummus': 'Non GMO, Garbanzo Beans, Tahini (Ground Sesame), Roasted Garlic, Chives, Non GMO, Citric Acid, Salt',
    'Pesto Hummus': 'Base hummus with pesto (basil, garlic, olive oil)',
    'Dill Hummus': 'Fresh dill added to Original vegan Hummus',
    'Spinach & Artichoke Hummus': 'Base hummus with spinach and artichoke',
    'Chipotle & Fire Roasted Red Pepper Hummus': 'Base hummus with chipotle and fire roasted red pepper',
    'Roasted Onion & Balsamic Hummus': 'Garbanzo Beans, Tahini (Ground Sesame), Garlic, Onion, Balsamic Vinegar, Non-GMO Citric Acid, Sea Salt',
    'Sun-Dried Tomato & Basil Hummus': 'Base hummus with sun-dried tomato and basil',
    'Kalamata Olive Hummus': 'Base hummus with kalamata olives',
    'Pomegranate Molasses Hummus': 'Base hummus with pomegranate molasses',
    'Toasted Sesame Hummus': 'Classic hummus with toasted sesame',
    'Zaatar Hummus': 'Classic hummus with zaatar spice blend',
    'Zesty Lemon Hummus': 'Original hummus with concentrated lemon',
    'Harissa Hummus': 'Traditional hummus with North African harissa',
    'Baba Ghanooj': 'Eggplant, Tahini (Ground Sesame), Garlic, Non-GMO Citric Acid, Sea Salt',
    'Tzatziki Sauce': 'Yogurt (Skim Milk, L. acidophilus, S. thermophiles, L. bulgaricus, L. casei, L. rhamnosus, B. bifidum cultures), Cucumber, Garlic, Sea Salt',
    'Garlic Tahini Sauce': 'Tahini (Ground Sesame), Garlic, Water, Non-GMO Citric Acid, Sea Salt',
    'Traditional Toum': 'Traditional Lebanese garlic emulsion',
    'Harissa Toum': 'Non-GMO canola/olive oil, garlic, harissa (hot chili peppers, garlic, onions, water, salt, extra virgin olive oil, spices, sunflower oil, non-GMO lactic acid), 100% lemon juice, sea salt',
    'Traditional Falafel': 'Fava Beans, Garbanzo Beans, Rice Bran Oil, Water, Onions, Potatoes, Cilantro, Parsley, Spices, Garlic, Baking Powder, Salt',
    'Harissa Falafel': 'Garbanzo Beans, Non-GMO Rice Oil, Water, Cilantro, Onion, Potatoes, Spices, Garlic, Parsley, Sea Salt. Harissa Sauce (hot chili peppers, garlic, onions, water, salt, extra-virgin olive oil, spices, sunflower oil, non-GMO lactic acid)',
    'Pomegranate Mint Dolmas': 'Rice, Grape Leaves, Green Bell Pepper, Onion, Pomegranate Molasses, Rice Bran Oil, Tomatoes, Lemon Juice, Tomato Paste, Parsley, Mint, Salt, Spice',
    'Tabouleh': 'Tomatoes, Parsley, Quinoa (water, quinoa), Onions, Lemon Juice, Olive Oil, Salt, Mint, Spice',
    'Falafel Wrap': 'Pita bread, falafel, garlic tahini sauce, hummus, lettuce, tomato, cucumber',
    'Mediterranean Wrap': 'Kalamata Olive Hummus, feta cheese, cucumber, tomato, lettuce, and zaatar spice blend in whole wheat pita',
    'Lebanese Lunchbox': 'Falafel, Hummus, Tabouleh, Mihshi'
  };

  // Descriptive flavor profiles
  const flavorDescriptions = {
    'Original Hummus': {
      depth: 'Profound (hand-crafted Lebanese tradition that builds complexity through pure ingredients)',
      tanginess: 'Subtle (precise citric acid balance that brightens without overpowering)',
      herbaceousness: 'Background (clean foundation showcasing chickpea and tahini quality)',
      richness: 'Medium (smooth tahini creates luxurious, coating mouthfeel)',
      pungency: 'Mild (fresh garlic aromatics provide gentle warmth)',
      spice: 'Gentle (masterful restraint that lets authentic flavours speak)'
    },
    'Organic Original Hummus': {
      depth: 'Profound (organic ingredients elevate traditional complexity)',
      tanginess: 'Subtle (pristine organic brightness)',
      herbaceousness: 'Background (clean, organic purity)',
      richness: 'Medium (premium organic tahini)',
      pungency: 'Mild (organic garlic essence)',
      spice: 'Gentle (uncompromising simplicity)'
    },
    'Cilantro Jalapeno Hummus': {
      depth: 'Profound (layers of fresh herb and pepper complexity)',
      tanginess: 'Balanced (jalapeño vibrancy meets smooth tahini)',
      herbaceousness: 'Supportive (bright cilantro freshness)',
      richness: 'Medium (perfectly textured foundation)',
      pungency: 'Medium (aromatic garlic-jalapeño harmony)',
      spice: 'Bold (unmistakable jalapeño heat with cooling cilantro)'
    },
    'Roasted Garlic & Chive Hummus': {
      depth: 'Profound (roasted garlic creates deep, caramelized complexity)',
      tanginess: 'Subtle (gentle citric balance)',
      herbaceousness: 'Supportive (fresh chive elegance)',
      richness: 'Medium (roasted garlic luxuriousness)',
      pungency: 'Medium (roasted garlic aromatics)',
      spice: 'Gentle (sophisticated warmth)'
    },
    'Pesto Hummus': {
      depth: 'Profound (Mediterranean herb symphony)',
      tanginess: 'Subtle (classic hummus foundation)',
      herbaceousness: 'Dominant (bold basil celebration)',
      richness: 'Full (pesto oils create luxurious texture)',
      pungency: 'Medium (basil-garlic aromatic dance)',
      spice: 'Gentle (herbal complexity without heat)'
    },
    'Dill Hummus': {
      depth: 'Profound (Mediterranean herb elegance)',
      tanginess: 'Subtle (clean, bright base)',
      herbaceousness: 'Supportive (distinctive dill character)',
      richness: 'Medium (classic tahini smoothness)',
      pungency: 'Mild (fresh herb aromatics)',
      spice: 'Gentle (herb-forward elegance)'
    },
    'Spinach & Artichoke Hummus': {
      depth: 'Profound (garden-to-table complexity)',
      tanginess: 'Balanced (artichoke brightness)',
      herbaceousness: 'Supportive (green spinach freshness)',
      richness: 'Full (artichoke depth meets tahini)',
      pungency: 'Mild (vegetable aromatics)',
      spice: 'Gentle (pure vegetable essence)'
    },
    'Chipotle & Fire Roasted Red Pepper Hummus': {
      depth: 'Profound (smoke-kissed complexity)',
      tanginess: 'Balanced (roasted pepper brightness)',
      herbaceousness: 'Background (smoky focus)',
      richness: 'Full (roasted sweetness depth)',
      pungency: 'Intense (chipotle smoke aromatics)',
      spice: 'Bold (sophisticated heat with sweet balance)'
    },
    'Roasted Onion & Balsamic Hummus': {
      depth: 'Profound (caramelized onion meets aged balsamic)',
      tanginess: 'Pronounced (balsamic sophistication)',
      herbaceousness: 'Background (ingredient purity focus)',
      richness: 'Full (onion sweetness depth)',
      pungency: 'Medium (aromatic onion-garlic blend)',
      spice: 'Gentle (complex flavour without heat)'
    },
    'Sun-Dried Tomato & Basil Hummus': {
      depth: 'Profound (Mediterranean sun-concentration)',
      tanginess: 'Pronounced (tomato intensity)',
      herbaceousness: 'Supportive (basil brightness)',
      richness: 'Full (sun-dried intensity)',
      pungency: 'Medium (tomato-basil aromatics)',
      spice: 'Gentle (herb-forward complexity)'
    },
    'Kalamata Olive Hummus': {
      depth: 'Profound (Greek olive sophistication)',
      tanginess: 'Balanced (olive brine elegance)',
      herbaceousness: 'Background (olive focus)',
      richness: 'Full (olive oil luxury)',
      pungency: 'Medium (distinctive olive character)',
      spice: 'Gentle (Mediterranean purity)'
    },
    'Pomegranate Molasses Hummus': {
      depth: 'Profound (Persian sweet-tart complexity)',
      tanginess: 'Pronounced (pomegranate brightness)',
      herbaceousness: 'Background (fruit focus)',
      richness: 'Full (molasses luxuriousness)',
      pungency: 'Mild (fruity aromatics)',
      spice: 'Gentle (sophisticated sweetness)'
    },
    'Toasted Sesame Hummus': {
      depth: 'Profound (double sesame intensity)',
      tanginess: 'Subtle (pure nutty focus)',
      herbaceousness: 'Background (sesame prominence)',
      richness: 'Full (concentrated nuttiness)',
      pungency: 'Medium (toasted aromatics)',
      spice: 'Gentle (warm, nutty complexity)'
    },
    'Zaatar Hummus': {
      depth: 'Profound (ancient Middle Eastern spice mastery)',
      tanginess: 'Balanced (sumac brightness in zaatar)',
      herbaceousness: 'Dominant (thyme and oregano celebration)',
      richness: 'Medium (spice-infused tahini)',
      pungency: 'Intense (aromatic spice symphony)',
      spice: 'Moderate (warming herb-spice blend)'
    },
    'Zesty Lemon Hummus': {
      depth: 'Profound (citrus-brightness mastery)',
      tanginess: 'Pronounced (lemon celebration)',
      herbaceousness: 'Background (citrus focus)',
      richness: 'Medium (bright tahini balance)',
      pungency: 'Mild (fresh citrus aromatics)',
      spice: 'Gentle (pure brightness)'
    },
    'Harissa Hummus': {
      depth: 'Profound (North African spice complexity)',
      tanginess: 'Balanced (harissa acidity)',
      herbaceousness: 'Background (spice prominence)',
      richness: 'Medium (heat-balanced tahini)',
      pungency: 'Intense (harissa aromatic power)',
      spice: 'Bold (authentic North African heat)'
    },
    'Baba Ghanooj': {
      depth: 'Profound (smoke-kissed eggplant mastery)',
      tanginess: 'Subtle (gentle brightness)',
      herbaceousness: 'Background (eggplant prominence)',
      richness: 'Full (eggplant-tahini luxury)',
      pungency: 'Medium (roasted aromatics)',
      spice: 'Gentle (pure, roasted essence)'
    },
    'Tzatziki Sauce': {
      depth: 'Moderate (fresh Mediterranean simplicity)',
      tanginess: 'Balanced (yogurt brightness)',
      herbaceousness: 'Background (cucumber freshness)',
      richness: 'Light (clean, refreshing texture)',
      pungency: 'Mild (gentle garlic touch)',
      spice: 'Gentle (cooling purity)'
    },
    'Garlic Tahini Sauce': {
      depth: 'Profound (concentrated sesame-garlic power)',
      tanginess: 'Subtle (gentle acid balance)',
      herbaceousness: 'Background (garlic focus)',
      richness: 'Medium (tahini concentration)',
      pungency: 'Medium (garlic-forward intensity)',
      spice: 'Gentle (pure, clean heat)'
    },
    'Traditional Toum': {
      depth: 'Profound (Lebanese culinary heritage)',
      tanginess: 'Balanced (lemon brightness)',
      herbaceousness: 'Background (garlic prominence)',
      richness: 'Full (creamy emulsion)',
      pungency: 'Intense (concentrated garlic power)',
      spice: 'Gentle (pure garlic essence)'
    },
    'Harissa Toum': {
      depth: 'Profound (Lebanese meets North African mastery)',
      tanginess: 'Pronounced (lemon-harissa brightness)',
      herbaceousness: 'Background (spice focus)',
      richness: 'Full (luxurious emulsion)',
      pungency: 'Intense (garlic-harissa aromatics)',
      spice: 'Bold (sophisticated heat symphony)'
    },
    'Traditional Falafel': {
      depth: 'Profound (ancient recipe complexity)',
      tanginess: 'Subtle (herb brightness)',
      herbaceousness: 'Supportive (cilantro-parsley freshness)',
      richness: 'Medium (perfectly fried texture)',
      pungency: 'Medium (herb-garlic aromatics)',
      spice: 'Moderate (traditional spice blend)'
    },
    'Harissa Falafel': {
      depth: 'Profound (traditional meets North African innovation)',
      tanginess: 'Balanced (harissa complexity)',
      herbaceousness: 'Supportive (fresh herb balance)',
      richness: 'Medium (spice-infused texture)',
      pungency: 'Intense (harissa-herb aromatics)',
      spice: 'Bold (authentic harissa fire)'
    },
    'Pomegranate Mint Dolmas': {
      depth: 'Profound (Persian-Lebanese fusion mastery)',
      tanginess: 'Pronounced (pomegranate-lemon brightness)',
      herbaceousness: 'Supportive (mint-parsley elegance)',
      richness: 'Medium (satisfying rice texture)',
      pungency: 'Mild (delicate herb aromatics)',
      spice: 'Moderate (refined spice sophistication)'
    },
    'Tabouleh': {
      depth: 'Profound (garden-fresh complexity)',
      tanginess: 'Pronounced (lemon-tomato brightness)',
      herbaceousness: 'Dominant (parsley-mint celebration)',
      richness: 'Light (refreshing texture)',
      pungency: 'Mild (fresh herb aromatics)',
      spice: 'Gentle (subtle seasoning)'
    },
    'Falafel Wrap': {
      depth: 'Profound (layered component harmony)',
      tanginess: 'Balanced (tomato-tahini brightness)',
      herbaceousness: 'Supportive (falafel herbs, fresh vegetables)',
      richness: 'Medium (satisfying combination)',
      pungency: 'Medium (garlic tahini prominence)',
      spice: 'Moderate (falafel spice blend)'
    },
    'Mediterranean Wrap': {
      depth: 'Profound (Mediterranean flavour symphony)',
      tanginess: 'Pronounced (feta-tomato-zaatar brightness)',
      herbaceousness: 'Dominant (zaatar herb celebration)',
      richness: 'Full (feta luxury)',
      pungency: 'Intense (zaatar aromatic power)',
      spice: 'Moderate (warming zaatar blend)'
    },
    'Lebanese Lunchbox': {
      depth: 'Profound (Lebanese culinary showcase)',
      tanginess: 'Pronounced (tabouleh-mihshi brightness)',
      herbaceousness: 'Dominant (herb garden celebration)',
      richness: 'Medium (varied texture symphony)',
      pungency: 'Medium (aromatic complexity)',
      spice: 'Moderate (traditional spice harmony)'
    }
  };

  // Product flavor profiles (1-3 scale)
  const flavorProfiles = {
    'Original Hummus': { depth: 3, tanginess: 1, herbaceousness: 1, richness: 2, pungency: 1, spice: 1 },
    'Organic Original Hummus': { depth: 3, tanginess: 1, herbaceousness: 1, richness: 2, pungency: 1, spice: 1 },
    'Cilantro Jalapeno Hummus': { depth: 3, tanginess: 2, herbaceousness: 2, richness: 2, pungency: 2, spice: 3 },
    'Roasted Garlic & Chive Hummus': { depth: 3, tanginess: 1, herbaceousness: 2, richness: 2, pungency: 2, spice: 1 },
    'Pesto Hummus': { depth: 3, tanginess: 1, herbaceousness: 3, richness: 3, pungency: 2, spice: 1 },
    'Dill Hummus': { depth: 3, tanginess: 1, herbaceousness: 2, richness: 2, pungency: 1, spice: 1 },
    'Spinach & Artichoke Hummus': { depth: 3, tanginess: 2, herbaceousness: 2, richness: 3, pungency: 1, spice: 1 },
    'Chipotle & Fire Roasted Red Pepper Hummus': { depth: 3, tanginess: 2, herbaceousness: 1, richness: 3, pungency: 3, spice: 3 },
    'Roasted Onion & Balsamic Hummus': { depth: 3, tanginess: 3, herbaceousness: 1, richness: 3, pungency: 2, spice: 1 },
    'Sun-Dried Tomato & Basil Hummus': { depth: 3, tanginess: 3, herbaceousness: 2, richness: 3, pungency: 2, spice: 1 },
    'Kalamata Olive Hummus': { depth: 3, tanginess: 2, herbaceousness: 1, richness: 3, pungency: 2, spice: 1 },
    'Pomegranate Molasses Hummus': { depth: 3, tanginess: 3, herbaceousness: 1, richness: 3, pungency: 1, spice: 1 },
    'Toasted Sesame Hummus': { depth: 3, tanginess: 1, herbaceousness: 1, richness: 3, pungency: 2, spice: 1 },
    'Zaatar Hummus': { depth: 3, tanginess: 2, herbaceousness: 3, richness: 2, pungency: 3, spice: 2 },
    'Zesty Lemon Hummus': { depth: 3, tanginess: 3, herbaceousness: 1, richness: 2, pungency: 1, spice: 1 },
    'Harissa Hummus': { depth: 3, tanginess: 2, herbaceousness: 1, richness: 2, pungency: 3, spice: 3 },
    'Baba Ghanooj': { depth: 3, tanginess: 1, herbaceousness: 1, richness: 3, pungency: 2, spice: 1 },
    'Tzatziki Sauce': { depth: 2, tanginess: 2, herbaceousness: 1, richness: 1, pungency: 1, spice: 1 },
    'Garlic Tahini Sauce': { depth: 3, tanginess: 1, herbaceousness: 1, richness: 2, pungency: 2, spice: 1 },
    'Traditional Toum': { depth: 3, tanginess: 2, herbaceousness: 1, richness: 3, pungency: 3, spice: 1 },
    'Harissa Toum': { depth: 3, tanginess: 3, herbaceousness: 1, richness: 3, pungency: 3, spice: 3 },
    'Traditional Falafel': { depth: 3, tanginess: 1, herbaceousness: 2, richness: 2, pungency: 2, spice: 2 },
    'Harissa Falafel': { depth: 3, tanginess: 2, herbaceousness: 2, richness: 2, pungency: 3, spice: 3 },
    'Pomegranate Mint Dolmas': { depth: 3, tanginess: 3, herbaceousness: 2, richness: 2, pungency: 1, spice: 2 },
    'Tabouleh': { depth: 3, tanginess: 3, herbaceousness: 3, richness: 1, pungency: 1, spice: 1 },
    'Falafel Wrap': { depth: 3, tanginess: 2, herbaceousness: 2, richness: 2, pungency: 2, spice: 2 },
    'Mediterranean Wrap': { depth: 3, tanginess: 3, herbaceousness: 3, richness: 3, pungency: 3, spice: 2 },
    'Lebanese Lunchbox': { depth: 3, tanginess: 3, herbaceousness: 3, richness: 2, pungency: 2, spice: 2 }
  };

  const categories = {
    'Hummus': [
      'Original Hummus', 'Organic Original Hummus', 'Cilantro Jalapeno Hummus', 'Roasted Garlic & Chive Hummus', 
      'Pesto Hummus', 'Dill Hummus', 'Spinach & Artichoke Hummus', 'Chipotle & Fire Roasted Red Pepper Hummus',
      'Roasted Onion & Balsamic Hummus', 'Sun-Dried Tomato & Basil Hummus', 'Kalamata Olive Hummus', 
      'Pomegranate Molasses Hummus', 'Toasted Sesame Hummus', 'Zaatar Hummus', 'Zesty Lemon Hummus', 'Harissa Hummus'
    ],
    'Sauces & Dips': ['Baba Ghanooj', 'Tzatziki Sauce', 'Garlic Tahini Sauce', 'Traditional Toum', 'Harissa Toum'],
    'Prepared Foods': ['Traditional Falafel', 'Harissa Falafel', 'Pomegranate Mint Dolmas', 'Tabouleh'],
    'Wraps & Meals': ['Falafel Wrap', 'Mediterranean Wrap', 'Lebanese Lunchbox']
  };

  // Radial chart component with mixed typography and theming
  const TypographyRadialChart = ({ profile, size = 500, theme }) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size / 2 - 100; 
    
    // REFINED: 10% closer while maintaining character-based positioning
    const flavorSetup = [
      { key: 'depth', angle: 90, distance: 36 },         // BOTTOM (40px → 36px)
      { key: 'pungency', angle: 150, distance: 38 },     // Bottom left (42px → 38px)
      { key: 'spice', angle: 210, distance: 38 },        // Top left (42px → 38px)
      { key: 'richness', angle: 270, distance: 36 },     // TOP (40px → 36px)
      { key: 'tanginess', angle: 330, distance: 38 },    // Top right (42px → 38px)
      { key: 'herbaceousness', angle: 30, distance: 41 } // Bottom right (45px → 41px)
    ];
    
    const segments = flavorSetup.map(({ key, angle, distance }) => {
      const color = flavorColors[key].color;
      const intensity = profile[key];
      const segmentRadius = (intensity / 3) * maxRadius;
      
      // Center angle for label positioning
      const centerAngleRad = (angle * Math.PI) / 180;
      
      // Segment boundaries (60° wide)
      const startAngleRad = ((angle - 30) * Math.PI) / 180;
      const endAngleRad = ((angle + 30) * Math.PI) / 180;
      
      // Segment path points
      const startX = centerX + segmentRadius * Math.cos(startAngleRad);
      const startY = centerY + segmentRadius * Math.sin(startAngleRad);
      const endX = centerX + segmentRadius * Math.cos(endAngleRad);
      const endY = centerY + segmentRadius * Math.sin(endAngleRad);
      
      // Create pie slice path
      const pathData = intensity === 0 ? '' : [
        `M ${centerX} ${centerY}`,
        `L ${startX} ${startY}`,
        `A ${segmentRadius} ${segmentRadius} 0 0 1 ${endX} ${endY}`,
        `L ${centerX} ${centerY}`,
        'Z'
      ].join(' ');
      
      // Label positioned with Tufte-style visual centering
      const labelRadius = maxRadius + distance;
      const labelX = centerX + labelRadius * Math.cos(centerAngleRad);
      const labelY = centerY + labelRadius * Math.sin(centerAngleRad);
      
      // Calculate optimal text anchor and positioning adjustments
      let textAnchor = 'middle';
      let xOffset = 0;
      let yOffset = 0;
      
      // Position based on the character closest to center (Tufte principle)
      if (key === 'spice') {
        // Left side: align by "e" (end of word)
        textAnchor = 'end';
        xOffset = -5; // Fine adjustment
      } else if (key === 'pungency') {
        // Left side: align by "y" (end of word) 
        textAnchor = 'end';
        xOffset = -8; // Fine adjustment
      } else if (key === 'tanginess') {
        // Right side: align by "T" (start of word)
        textAnchor = 'start';
        xOffset = 5; // Fine adjustment
      } else if (key === 'herbaceousness') {
        // Right side: align by "H" (start of word)
        textAnchor = 'start';
        xOffset = 8; // Fine adjustment
      } else if (key === 'richness') {
        // Top: align by "hn" (middle of word)
        textAnchor = 'middle';
        yOffset = -2; // Slight upward adjustment
      } else if (key === 'depth') {
        // Bottom: align by "p" (middle of word)
        textAnchor = 'middle';
        yOffset = 2; // Slight downward adjustment
      }
      
      return {
        key,
        color,
        intensity,
        pathData,
        labelX: labelX + xOffset,
        labelY: labelY + yOffset,
        textAnchor
      };
    });

    // Concentric guide rings
    const rings = [1, 2, 3].map(level => {
      const radius = (level / 3) * maxRadius;
      return (
        <circle
          key={level}
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={theme.chartRings}
          strokeWidth="1"
        />
      );
    });

    return (
      <div className="w-full flex justify-center">
        <svg width={size} height={size} className="overflow-visible">
          {/* Outer boundary */}
          <circle
            cx={centerX}
            cy={centerY}
            r={maxRadius}
            fill="none"
            stroke={theme.chartOuter}
            strokeWidth="2"
          />
          
          {/* Guide rings */}
          {rings}
          
          {/* Flavor segments */}
          {segments.map(segment => (
            <g key={segment.key}>
              {segment.pathData && (
                <path
                  d={segment.pathData}
                  fill={segment.color}
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.8"
                />
              )}
              
              {/* Labels positioned with Tufte-style visual centering - IBM Plex Serif */}
              <text
                x={segment.labelX}
                y={segment.labelY}
                textAnchor={segment.textAnchor}
                dominantBaseline="middle"
                className="text-sm font-medium"
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
                fill={theme.textPrimary}
              >
                {segment.key.charAt(0).toUpperCase() + segment.key.slice(1)}
              </text>
            </g>
          ))}
          
          {/* Center point */}
          <circle
            cx={centerX}
            cy={centerY}
            r={3}
            fill={theme.textPrimary}
          />
        </svg>
      </div>
    );
  };

  const intensityLabels = {
    1: { depth: 'Low', tanginess: 'Subtle', herbaceousness: 'Background', richness: 'Light', pungency: 'Mild', spice: 'Gentle' },
    2: { depth: 'Medium', tanginess: 'Balanced', herbaceousness: 'Supportive', richness: 'Medium', pungency: 'Medium', spice: 'Moderate' },
    3: { depth: 'High', tanginess: 'Pronounced', herbaceousness: 'Dominant', richness: 'Full', pungency: 'Intense', spice: 'Bold' }
  };

  return (
    <div className="min-h-screen p-6 transition-colors duration-300" style={{ 
      backgroundColor: currentTheme.background,
      fontFamily: "'IBM Plex Sans', sans-serif" 
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300"
            style={{
              backgroundColor: currentTheme.cardBackground,
              borderColor: currentTheme.border,
              color: currentTheme.textPrimary
            }}
          >
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </span>
          </button>
        </div>

        <header className="text-center mb-8">
          {/* Main title - IBM Plex Serif */}
          <h1 className="text-4xl font-bold mb-2 transition-colors duration-300" 
              style={{ 
                fontFamily: "'IBM Plex Serif', serif",
                color: currentTheme.textPrimary
              }}>
            Trazza Foods Flavour Profiles
          </h1>
          {/* Subtitle - IBM Plex Sans */}
          <p className="text-lg transition-colors duration-300" 
             style={{ 
               fontFamily: "'IBM Plex Sans', sans-serif",
               color: currentTheme.textSecondary
             }}>
            Radial visualization showing intensity levels of each flavour dimension
          </p>
        </header>

        {/* Product Selection */}
        <div className="rounded-lg shadow-lg p-6 mb-8 transition-colors duration-300" 
             style={{ backgroundColor: currentTheme.cardBackground }}>
          {/* Section heading - IBM Plex Serif */}
          <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300" 
              style={{ 
                fontFamily: "'IBM Plex Serif', serif",
                color: currentTheme.textPrimary
              }}>
            Select Product
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(categories).map(([category, categoryProducts]) => (
              <div key={category} className="space-y-3">
                {/* Category names - IBM Plex Sans */}
                <h3 className="font-semibold text-base tracking-wide transition-colors duration-300 pb-1 border-b border-opacity-20" 
                    style={{ 
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      color: currentTheme.textSecondary,
                      borderColor: currentTheme.border
                    }}>
                  {category}
                </h3>
                <div className="space-y-2">
                  {categoryProducts.map(product => (
                    <button
                      key={product}
                      onClick={() => setSelectedProduct(product)}
                      className="w-full text-left p-3 rounded-lg text-sm leading-relaxed transition-all duration-300 border-2"
                      style={{ 
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        backgroundColor: selectedProduct === product ? currentTheme.selectedButton : 'transparent',
                        color: selectedProduct === product ? currentTheme.selectedButtonText : currentTheme.textPrimary,
                        borderColor: selectedProduct === product ? currentTheme.selectedButtonBorder : 'transparent',
                        ...(selectedProduct !== product && {
                          ':hover': { backgroundColor: currentTheme.buttonHover }
                        })
                      }}
                      onMouseEnter={(e) => {
                        if (selectedProduct !== product) {
                          e.target.style.backgroundColor = currentTheme.buttonHover;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedProduct !== product) {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chart */}
        <div className="rounded-lg shadow-lg p-8 transition-colors duration-300" 
             style={{ backgroundColor: currentTheme.cardBackground }}>
          {/* Product title - IBM Plex Serif */}
          <h2 className="text-3xl font-semibold mb-8 text-center transition-colors duration-300" 
              style={{ 
                fontFamily: "'IBM Plex Serif', serif",
                color: currentTheme.textPrimary
              }}>
            {selectedProduct} Flavour Profile
          </h2>
          
          <TypographyRadialChart profile={flavorProfiles[selectedProduct]} theme={currentTheme} />

          {/* Ingredients Section */}
          <div className="border-t pt-6 mt-8 transition-colors duration-300" 
               style={{ borderColor: currentTheme.border }}>
            {/* Section heading - IBM Plex Serif */}
            <h3 className="text-xl font-semibold mb-4 text-center transition-colors duration-300" 
                style={{ 
                  fontFamily: "'IBM Plex Serif', serif",
                  color: currentTheme.textPrimary
                }}>
              Ingredients
            </h3>
            <div className="p-4 rounded-lg transition-colors duration-300" 
                 style={{ backgroundColor: isDarkMode ? '#374151' : '#f9fafb' }}>
              {/* Ingredients text - IBM Plex Sans */}
              <p className="text-center leading-relaxed transition-colors duration-300" 
                 style={{ 
                   fontFamily: "'IBM Plex Sans', sans-serif",
                   color: currentTheme.textSecondary
                 }}>
                {productIngredients[selectedProduct]}
              </p>
            </div>
          </div>

          {/* Profile Details Below Chart */}
          <div className="border-t pt-6 mt-8 transition-colors duration-300" 
               style={{ borderColor: currentTheme.border }}>
            {/* Section heading - IBM Plex Serif */}
            <h3 className="text-xl font-semibold mb-4 text-center transition-colors duration-300" 
                style={{ 
                  fontFamily: "'IBM Plex Serif', serif",
                  color: currentTheme.textPrimary
                }}>
              Flavour Profile Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(flavorProfiles[selectedProduct]).map(([dimension, value]) => {
                const color = flavorColors[dimension].color;
                const label = intensityLabels[value][dimension];
                const description = flavorDescriptions[selectedProduct] 
                  ? flavorDescriptions[selectedProduct][dimension] 
                  : `${label} (Level ${value})`;
                
                return (
                  <div key={dimension} className="p-4 rounded-lg transition-colors duration-300" 
                       style={{ backgroundColor: isDarkMode ? '#374151' : '#f9fafb' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-5 h-5 rounded-full shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      {/* Dimension name - IBM Plex Serif */}
                      <div className="font-semibold capitalize transition-colors duration-300" 
                           style={{ 
                             fontFamily: "'IBM Plex Serif', serif",
                             color: currentTheme.textPrimary
                           }}>
                        {dimension}
                      </div>
                    </div>
                    {/* Description text - IBM Plex Sans */}
                    <div className="text-sm ml-8 transition-colors duration-300" 
                         style={{ 
                           fontFamily: "'IBM Plex Sans', sans-serif",
                           color: currentTheme.textSecondary
                         }}>
                      <div>
                        {flavorDescriptions[selectedProduct] && flavorDescriptions[selectedProduct][dimension] ? (
                          (() => {
                            const description = flavorDescriptions[selectedProduct][dimension];
                            const firstSpaceIndex = description.indexOf(' ');
                            const firstWord = description.substring(0, firstSpaceIndex);
                            const restOfText = description.substring(firstSpaceIndex);
                            return (
                              <>
                                <strong>{firstWord}</strong>{restOfText}
                              </>
                            );
                          })()
                        ) : (
                          `${label} (Level ${value})`
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-lg shadow-lg p-6 mt-8 transition-colors duration-300" 
             style={{ backgroundColor: currentTheme.cardBackground }}>
          {/* Section heading - IBM Plex Serif */}
          <h3 className="text-xl font-semibold mb-4 transition-colors duration-300" 
              style={{ 
                fontFamily: "'IBM Plex Serif', serif",
                color: currentTheme.textPrimary
              }}>
            How to Read the Chart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {/* Subheading - IBM Plex Serif */}
              <h4 className="font-semibold mb-2 transition-colors duration-300" 
                  style={{ 
                    fontFamily: "'IBM Plex Serif', serif",
                    color: currentTheme.textPrimary
                  }}>
                Structure
              </h4>
              {/* Body text - IBM Plex Sans */}
              <ul className="text-sm space-y-1 transition-colors duration-300" 
                  style={{ 
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    color: currentTheme.textSecondary
                  }}>
                <li>• <strong>Six sections:</strong> one for each flavour profile</li>
                <li>• <strong>Each section</strong> uses its specific brand colour</li>
                <li>• <strong>Center point</strong> = starting point for all flavours</li>
                <li>• <strong>Outer edge</strong> = maximum intensity (Level 3)</li>
                <li>• <strong>Note:</strong> To achieve harmony of flavour, all Trazza Foods products contain a little of each of these profiles.</li>
                <li>• <strong>Disclaimer:</strong> Flavour perception is highly personal and subjective. These profiles are intended as general guidance only. Individual experiences may vary based on personal taste preferences, sensitivity, and other factors.</li>
              </ul>
            </div>
            <div>
              {/* Subheading - IBM Plex Serif */}
              <h4 className="font-semibold mb-2 transition-colors duration-300" 
                  style={{ 
                    fontFamily: "'IBM Plex Serif', serif",
                    color: currentTheme.textPrimary
                  }}>
                Colour Legend
              </h4>
              <div className="space-y-2">
                {Object.entries(flavorColors).map(([key, { color }]) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {/* Legend text - IBM Plex Sans */}
                    <span className="capitalize font-medium transition-colors duration-300" 
                          style={{ 
                            fontFamily: "'IBM Plex Sans', sans-serif",
                            color: currentTheme.textPrimary
                          }}>
                      {key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
