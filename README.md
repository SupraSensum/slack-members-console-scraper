# Slack Members Console Scraper

A simple browser console script that automatically scrolls through Slack’s virtualized member list and collects member names.

## Purpose

Slack uses virtualized scrolling for its member list, meaning that only a subset of members is loaded in the DOM at any time. This script automates scrolling through the list and extracts the text from all `<strong data-qa="member_name">` elements—giving you a full list of member names (e.g., "kmw", etc.).

## Usage

1. Open Slack and navigate to the channel you want to inspect.
2. Open the channel details modal and select the **Members** tab.
3. Open your browser's developer console.
4. Paste the contents of `script.js` into the console and press Enter.
5. The script will scroll through the list, and once it has finished, it will log the collected names in the console.

## How It Works

- **Scroll and Collect:** The script repeatedly scrolls the last rendered member into view (using `scrollIntoView`) so Slack loads more members.
- **Name Extraction:** It collects the text content from each `<strong data-qa="member_name">` element.
- **Stop Condition:** It stops when no new names have been detected after several cycles.
